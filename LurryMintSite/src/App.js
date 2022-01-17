import './styles/App.css';

import Navigation from './components/Navigation';
import MintPage from './components/Mint';
import Roadmap from './components/Roadmap';
import QuestionList from './components/QuestionList';
import TeamList from './components/TeamList';


const App = () => {
return (
  <>
  <Navigation />
  <MintPage />
  <TeamList />
  <QuestionList/>
  <Roadmap />
  </>
)
};

export default App;
