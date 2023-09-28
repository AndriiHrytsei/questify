import { Helmet, HelmetProvider } from "react-helmet-async";
import AppBar from "../components/AppBar/AppBar";

export function QuestsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Quests</title>
      </Helmet>
      <AppBar />
      <p>quests</p>
    </HelmetProvider>
  );
}
