import "./styles/App.css";

import Navigation from "./components/Navigation";
import MintPage from "./components/Mint";
import Roadmap from "./components/Roadmap";
import QuestionList from "./components/QuestionList";
import TeamList from "./components/TeamList";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Depth from "./components/Depth";

const App = () => {
  return (
    <>
      <Navigation />
      <LandingPage />

      <div className="Roadmap-to-Team">
      <MintPage />
        <Roadmap />
        <QuestionList />
        <TeamList />
      </div>
      <Footer />
    </>
  );
};

export default App;
