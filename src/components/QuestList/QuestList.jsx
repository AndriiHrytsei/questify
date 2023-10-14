import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
import { getCards } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCards } from '../../redux/quests/operations'
import css from './QuestList.module.css'
import { editCard } from "../../redux/quests/operations";


export default function QuestList() {
  const cards = useSelector(getCards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleEditCard = (updatedCard) => {
    dispatch(editCard(updatedCard))
      .then((result) => {
        // Операція успішно виконана
        // Оновіть інтерфейс користувача за необхідності
      })
      .catch((error) => {
        // Помилка виконання операції
        // Відобразіть повідомлення про помилку користувачу
      });
  };  

  return (
    <>
      <ul className={css.list} onChange={handleEditCard}>
        {cards.length > 0 ? (
          cards.map((card) => (
            <li key={card._id} >
              <QuestCard card={card} />
            </li>
          ))
        ) : (
          <span>No cards</span>
        )}
      </ul>
      <div>
        <AddQuestBtn />
      </div>
    </>
  )
}
