// import React from 'react'
import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
import { getCards } from '../../redux/quests/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import css from './QuestList.css'    
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
        {cards.cards.length > 0 ? (
          cards.cards.map((card) => (
            <QuestCard key={card.id} />
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
