import React from 'react';
import './App.css';

import Nav from './components/navbar/Navbar';

import { Route } from 'react-router-dom';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/dialogues/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import TrainerContainer from './components/trainer/TrainerContainer';
import LoginContainer from './components/login/LoginContainer';


const App = (props) => {
 
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />
      <div className="profile">

        {/* <Route exact path='/dialogues' component={Dialogs} />  exact - точное совпадение ===  Route : следит за адресной строкой path */}
        {/* <Route path='/dialogues' component={Dialogs} />  прокинуть данные через component не выйдет | использую render с анонимной функцией */}
      
        <Route path='/dialogues' render={() => 
            <UsersContainer />} 
         />

        <Route path='/profile/:userId?' render={() =>
           <ProfileContainer  />} 
        />

        <Route path='/login' render={() =>
           <LoginContainer />} 
        />
        <Route path='/train' render={() =>
            <TrainerContainer />} 
          />
          
 
      </div>
    </div>

  );
}



export default App;
