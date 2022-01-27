import "./styles/App.css";

import Navigation from "./components/Navigation";
import MintPage from "./components/Mint";
import Roadmap from "./components/Roadmap";
import QuestionList from "./components/QuestionList";
import TeamList from "./components/TeamList";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      <LandingPage />
      <Navigation />
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
