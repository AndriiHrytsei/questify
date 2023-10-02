// import React from 'react'
import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
// import { getCards } from '../../redux/quests/selectors'
// import { useSelector } from 'react-redux'
// import css from './QuestList.css'    

export default function QuestList() {
  // const filteredCards = useSelector(getCards);

  return (
    <div>
      <QuestCard /> 
      <div>
        <AddQuestBtn />
      </div>
    </div>
  )
}
