// import React from 'react'
import QuestCard from '../QuestCard/QuestCard'
import AddQuestBtn from '../AddQuestBtn/AddQuestBtn'
// import { getCards } from '../../redux/quests/selectors'
import { useSelector } from 'react-redux'


export default function QuestList() {
  const cards = useSelector((state) => state.cards);

  // const filteredCards = cards.filter((card) => {
  //   card.title.toLowerCase();
  // })
console.log(cards);
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
