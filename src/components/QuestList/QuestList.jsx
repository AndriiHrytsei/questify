import QuestCard from "../QuestCard/QuestCard";
import AddQuestBtn from "../AddQuestBtn/AddQuestBtn";
import { getCards } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCards } from "../../redux/quests/operations";
import css from "./QuestList.module.css";

export default function QuestList() {
  const [cardState, setCardState] = useState(null)
  const cards = useSelector(getCards);
  const dispatch = useDispatch();

  const getCardState = (data) => {
    setCardState(data)
  }

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {cards.length > 0 ? (
          <>
            <h2 className={css.classTitle}>All Cards</h2>

            <div className={css.containerLevel}>
              {cards
                .filter((card) => card.status !== "Complete")
                .map((card) => (
                  <li key={card._id}>
                    <QuestCard card={card} defaultCardState={cardState}/>
                  </li>
                ))}
            </div>
            <h2 className={css.classTitle}>Done</h2>

            <div className={css.containerLevel}>
              {cards
                .filter((card) => card.status === "Complete")
                .map((card) => (
                  <li key={card._id}>
                    <QuestCard card={card} defaultCardState={cardState}/>
                  </li>
                ))}
            </div>
          </>
        ) : (
          <span>No cards</span>
        )}
      </ul>
      <div className={css.container}>
        <AddQuestBtn questState={getCardState}/>
      </div>
    </>
  );
}
