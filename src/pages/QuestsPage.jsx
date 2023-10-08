import { Helmet, HelmetProvider } from "react-helmet-async";
import AppBar from "../components/AppBar/AppBar";
import QuestList from "../components/QuestList/QuestList";

const QuestsPage = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Quests</title>
      </Helmet>
      <AppBar />
      <QuestList />
    </HelmetProvider>
  );
}

export default QuestsPage