// import React from 'react'
import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
// import { getCards } from '../../redux/quests/selectors'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import css from './QuestList.css'    
import { fetchCards } from '../../redux/quests/operations'

export default function QuestList() {
  // const filteredCards = useSelector(getCards);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCards())
  },[dispatch])
  return (
    <div>
      <QuestCard /> 
      <div>
        <AddQuestBtn />
      </div>
    </div>
  )
}
