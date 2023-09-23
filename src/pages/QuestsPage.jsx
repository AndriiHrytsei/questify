import { Helmet, HelmetProvider } from "react-helmet-async";
import  QuestList  from "../components/QuestList/QuestList"

export function QuestsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Quests</title>
      </Helmet>
        <QuestList />
    </HelmetProvider>
  )
}
