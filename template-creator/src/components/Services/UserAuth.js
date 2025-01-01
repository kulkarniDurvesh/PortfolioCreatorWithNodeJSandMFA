import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom'

const UserAuth = ({ element, ...rest }) => {
  debugger;
    //const navigate = useNavigate();
    const username = useSelector(state=>state.user.UserName);
    //const username = 'Durvesh@7';
    //const page = 'QuestionPage';
    console.log("in UserAuth.js"+username);
    if(username === undefined || username === ''){
        return <Navigate to="/Login" />;
    }

  return(<Routes> <Route {...rest} element={element.name}></Route></Routes>)
  
}

export default UserAuth
