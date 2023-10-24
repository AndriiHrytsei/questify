import css from "./QuestCard.module.css";
import DificultySelect from "../Select/DificultySelect";
import CategorySelect from "../Select/CategorySelect";
import Cross from "../../images/Cross";
import Modald from "../ModalDelet/Modald";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  editCard,
  setCardsCompleted,
} from "../../redux/quests/operations";
import { useState } from "react";
import { unsetIsCreating } from "../../redux/auth/authSlice";
import Tick from "../../images/Tick";
import TrashBin from "../../images/TrashBin";
import Done from "../../images/Done";

export default function QuestCard({ card, defaultCardState }) {
  const [dificultySelect, setdificultySelect] = useState(null);
  const [categorySelect, setCategorySelect] = useState(null);
  const [stateCard, setStateCard] = useState(defaultCardState ?? true);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [modalDeletState,setModalDeletState] = useState(false)
  const dispatch = useDispatch();

  const updaitStateDoubleClick = () => {
    setStateCard(false);
  };

  const handleConfirmationPage = () => {
    if (card.status === "Complete") {
      setConfirmationPage(false);
    } else {
      setConfirmationPage(true);
    }
  };

  const handleDelete = () => {
    setModalDeletState(true)
  };

  const handleCompleteCard = () => {
    setStateCard(true);
    dispatch(setCardsCompleted(card._id));
    setConfirmationPage(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      editCard({
        title: form.elements.title.value,
        difficulty: dificultySelect ? dificultySelect.label : card.difficulty,
        category: categorySelect ? categorySelect.label : card.category,
        date: form.elements.date.value.split("T")[0],
        time: form.elements.date.value.split("T")[1]
          ? form.elements.date.value.split("T")[1]
          : card.time,
        type: "Task",
        id: card._id,
      })
    );
    dispatch(unsetIsCreating());
    setStateCard(true);
  };
  
  const cancelChanges = () => {
    dispatch(editCard({...card, id: card._id}))
    dispatch(unsetIsCreating());
    setStateCard(true);
  }

  return (
    <form
      className={css.main}
      onSubmit={handleEdit}
      onDoubleClick={updaitStateDoubleClick}
    >
      {confirmationPage === true ? (
        <>
          <h3 className={css.textContinuen}>
            Completed:
            <button
              type="button"
              className={css.backToCard}
              onClick={() => {
                setConfirmationPage(false);
              }}
            >
              {card.title.length > 16
                ? `${card.title.slice(0, 16)}...`
                : card.title}
            </button>
          </h3>
          <Done/>
          <button
            type="button"
            className={css.buttonContineun}
            onClick={handleCompleteCard}
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="5"
              viewBox="0 0 7 5"
              fill="none"
            >
              <path
                d="M4.71372 4.9248C4.61836 5.02507 4.45964 5.02507 4.36094 4.9248C4.26558 4.82793 4.26558 4.6667 4.36094 4.57005L6.14973 2.75291H0.246967C0.109368 2.75269 0 2.64159 0 2.50181C0 2.36203 0.109368 2.24731 0.246967 2.24731H6.14973L4.36094 0.433565C4.26558 0.333303 4.26558 0.171845 4.36094 0.0751963C4.45964 -0.0250659 4.61858 -0.0250659 4.71372 0.0751963L6.92598 2.32251C7.02467 2.41938 7.02467 2.58062 6.92598 2.67726L4.71372 4.9248Z"
                fill="#00D7FF"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          <div className={css.levels}>
            <DificultySelect
              selectedDificulty={card.difficulty}
              stateCard={stateCard}
              // card={card}
              onChange={(selectedOption) => setdificultySelect(selectedOption)}
            />
            <button type="button" onClick={handleConfirmationPage}>
              <svg
                className={css.svg}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill={card.status === "Complete" ? "#00d7ff" : "#B9C3C8"}
                  d="M809.463 273.883l-179.447-16.968c-11.315-1.029-21.090-8.227-25.712-19.025l-64.275-155.801c-10.282-25.709-46.797-25.709-57.079 0l-63.762 155.801c-4.113 10.798-14.397 17.996-25.71 19.025l-179.455 16.968c-26.738 2.571-37.536 35.994-17.482 53.99l135.234 118.778c8.741 7.713 12.341 19.026 9.77 30.337l-40.622 166.595c-6.171 26.228 22.11 47.816 45.763 33.941l149.632-87.934c9.77-5.655 21.597-5.655 31.367 0l149.634 87.934c23.654 13.875 51.935-7.201 45.759-33.941l-40.108-166.595c-2.569-11.311 1.029-22.624 9.77-30.337l135.233-118.778c19.54-17.997 8.229-51.419-18.511-53.99z"
                ></path>
              </svg>
            </button>
          </div>
          <div className={css.task}>
            <div className={css.task_input}>
              <input
                type="text"
                className={stateCard ? css.input_text_noActive : css.input_text}
                readOnly={stateCard}
                name="title"
                defaultValue={card.title}
              />
            </div>
            <ul className={css.list_task}>
              <li>
                <input
                  type="datetime-local"
                  className={css.input_date}
                  name="date"
                  readOnly={stateCard}
                  defaultValue={`${card.date} ${card.time}`}
                />
              </li>
            </ul>
          </div>
          <div className={css.group}>
            <div>
              <CategorySelect
                selectedCategory={card.category}
                stateCard={stateCard}
                onChange={(selectedOption) => setCategorySelect(selectedOption)}
              />
            </div>
            {stateCard === false && (
              <div>
                {modalDeletState === true && <Modald card={card} onCancelClick={() => {setModalDeletState(false)}}/>}
                <ul className={css.list_buttons}>
                  <li>
                    <button type="button" className={css.trashBin} onClick={handleDelete}>
                      <TrashBin />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={css.cross}
                      onClick={cancelChanges}
                    >
                      <Cross />
                    </button>
                  </li>
                  <li>
                    <button type="submit" className={css.start}>
                      <Tick />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </form>
  );
}

QuestCard.propTypes = {
  card: PropTypes.object.isRequired,
  defaultCardState: PropTypes.bool,
};
