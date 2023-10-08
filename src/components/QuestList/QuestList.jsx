import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
import { getCards } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCards } from '../../redux/quests/operations'

export default function QuestList() {
  
  const cards = useSelector(getCards);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCards())
  },[dispatch])

  return (
    <div>
      <ul>
        {console.log(cards)}
        {cards.length > 0 ? ( 
          cards.map((card) => (            
            <li key={card._id}>
              <QuestCard key={card._id}  card={card}/>
            </li>
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
