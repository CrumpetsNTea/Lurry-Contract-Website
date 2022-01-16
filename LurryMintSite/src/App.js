import './styles/App.css';
import MintPage from './components/Mint';
import Roadmap from './components/Roadmap';
import Navigation from './components/Navigation';
import QuestionList from './components/QuestionList';

const App = () => {
return (
  <>
  <Navigation />
  <MintPage />
  <Roadmap />
  <QuestionList />
  </>
)
};

export default App;
