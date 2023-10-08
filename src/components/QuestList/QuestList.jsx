import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
import { getCards } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCards } from '../../redux/quests/operations'

export default function QuestList() {
  const cards = useSelector(getCards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {cards.length > 0 ? (
          cards.map((card) => (
            <QuestCard key={card._id} card={card} />
          ))
        ) : (
          <span>No cards</span>
        )}
      </ul>
      <div>
        <AddQuestBtn />
      </div>
    </div>
  )
}
