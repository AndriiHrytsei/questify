import css from "./QuestCard.module.css";
import DificultySelect from "../Select/Select";
import CategorySelect from "../Select/SelectGroup";
import Cross from "../../images/Cross";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/quests/operations";
import PropTypes from "prop-types";
import { editCard } from "../../redux/quests/operations";
import { useState } from "react";

export default function QuestCard({ card }) {
  const [dificultySelect, setdificultySelect] = useState(null);
  const [categorySelect, setCategorySelect] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteCard(card._id));

  // console.log(categorySelect);  
  // console.log({...dificultySelect, ...categorySelect});

  const handleEdit = (e) => {
    const form = e.target;
    dispatch(
      editCard({
        // card._id,
        title: form.elements.title.value,
        // difficulty: cardOption.difficulty,
        date: form.elements.date.value,
        time: form.elements.time.value,
        type: "Task",
        category: dificultySelect ? dificultySelect.value : null,
      })
    );
  };
  // console.log(selectedCategory);

  return (
    <form className={css.main} onSubmit={handleEdit}>
      <div className={css.levels}>
        <DificultySelect
          defaultValue={dificultySelect}
          onChange={(selectedOption) => setdificultySelect(selectedOption)}
          // styles={{
          //   control: (baseStyles, state) => {
          //       console.log(state);
          //       const selectedDificulty = state.selectProps.value.label
          //       console.log(selectedDificulty);
          //     return {
          //       ...baseStyles,
          //       height: state && "20px",
          //     };
          //   },
          // }} x`
        />
        <svg
          className={css.svg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#00d7ff"
            d="M809.463 273.883l-179.447-16.968c-11.315-1.029-21.090-8.227-25.712-19.025l-64.275-155.801c-10.282-25.709-46.797-25.709-57.079 0l-63.762 155.801c-4.113 10.798-14.397 17.996-25.71 19.025l-179.455 16.968c-26.738 2.571-37.536 35.994-17.482 53.99l135.234 118.778c8.741 7.713 12.341 19.026 9.77 30.337l-40.622 166.595c-6.171 26.228 22.11 47.816 45.763 33.941l149.632-87.934c9.77-5.655 21.597-5.655 31.367 0l149.634 87.934c23.654 13.875 51.935-7.201 45.759-33.941l-40.108-166.595c-2.569-11.311 1.029-22.624 9.77-30.337l135.233-118.778c19.54-17.997 8.229-51.419-18.511-53.99z"
          ></path>
        </svg>
      </div>
      <div className={css.task}>
        <div className={css.task_input}>
          <input
            type="text"
            className={css.input_text}
            readOnly={false}
            name="title"
          />
        </div>
        <ul className={css.list_task}>
          <li>
            <input
              type="date"
              className={css.input_date}
              name="date"
              readOnly={false}
            />
          </li>
          <li>
            <input type="time" name="time" className={css.input_time} />
          </li>
        </ul>
      </div>
      <div className={css.group}>
        <div>
          <CategorySelect
            defaultValue={categorySelect}
            onChange={(selectedOption) => setCategorySelect(selectedOption)}
          />
        </div>
        <div>
          <ul className={css.list_buttons}>
            <li>
              <button
                type="button"
                onClick={handleDelete}
                className={css.cross}
              >
                <Cross />
              </button>
            </li>
            <li>
              <button type="submit" className={css.start}>
                START
              </button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}

QuestCard.propTypes = {
  card: PropTypes.object.isRequired,
};
