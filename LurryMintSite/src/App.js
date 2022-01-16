import './styles/App.css';
import MintPage from './components/Mint';
import Roadmap from './components/Roadmap';
import Navigation from './components/Navigation';
import QuestionList from './components/QuestionList';
import TeamListItem from './components/TeamListItem';
import TeamList from './components/TeamList';



const App = () => {
return (
  <>
  <Navigation />
  <MintPage />
  <Roadmap />
  <QuestionList/>
  <TeamList />
  </>
)
};

export default App;
