import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
import { getCards } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCards } from '../../redux/quests/operations'
import css from './QuestList.module.css'


export default function QuestList() {
  
  const cards = useSelector(getCards);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  
  console.log(cards);

  return (
    <>
      <ul className={css.list}>
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
      <div className={css.container}>
        <AddQuestBtn />
      </div>
    </>
  )
}
