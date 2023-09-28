import { Helmet, HelmetProvider } from "react-helmet-async";
import Landing from "../components/Landing/Landing";

const LandingPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Welcome!</title>
      </Helmet>
      <Landing />
    </HelmetProvider>
  );
};

export default LandingPage;
