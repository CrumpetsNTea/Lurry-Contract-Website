import "./styles/App.css";

import Navigation from "./components/Navigation";
import MintPage from "./components/Mint";
import ICO from "./components/ICO";
import Roadmap from "./components/Roadmap";
import QuestionList from "./components/QuestionList";
import TeamList from "./components/TeamList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <MintPage />
      <ICO />
      <div className="Roadmap-to-Team">
      <Roadmap />
      <QuestionList />
      <TeamList />
      </div>
      <Footer />
    </>
  );
};

export default App;
