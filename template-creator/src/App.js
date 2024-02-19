import './App.css';
import Template from './components/BaseTemplate/Template';
import QuestionPage from './components/Carousel/QuestionPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={QuestionPage} />
          <Route exact path='/Template' Component={Template} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
