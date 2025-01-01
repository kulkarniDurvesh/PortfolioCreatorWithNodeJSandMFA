import './App.css';
import Template from './components/BaseTemplate/Template';
import QuestionPage from './components/Carousel/QuestionPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registeration from './components/Login/Registeration';
import QRCodePopup from './components/Login/QRCodePopup';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import UserAuth from './components/Services/UserAuth';
import Details from './components/Carousel/Details';
function App() {
  const activeComponent = 'home';

  const username = useSelector(state => state.user.UserName);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Registeration />} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/QRCodePopup' element={<QRCodePopup />} />
          
          {/* <UserAuth exact path='/QuestionPage' element={<QuestionPage />} />
          <UserAuth exact path='/Template' element={<Template />} activeComponent={activeComponent} />
           */}
           
          <Route path='/QuestionPage' element={<QuestionPage />} />
          <Route path='/Template' element={<Template />} />
          <Route path='/Details' element={<Details />} />
          {/* <Route path="/QuestionPage/*" element={<UserAuth element={<QuestionPage/>} />} />
          <Route path="/Template/*" element={<UserAuth element={<Template/>} />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
