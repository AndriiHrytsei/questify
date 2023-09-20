import { Helmet, HelmetProvider } from "react-helmet-async";

export function QuestsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Quests</title>
      </Helmet>
      <p>quests</p>
    </HelmetProvider>
  )
}
