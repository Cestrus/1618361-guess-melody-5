import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import LoginScreen from '../login-screen/login-screen';
import LoseScreen from '../lose-screen/lose-screen';
import WinScreen from '../win-screen/win-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';


const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <WelcomeScreen errorsCount = {errorsCount} />
        </Route>
        <Route path='/login' exact>
          <LoginScreen />
        </Route>
        <Route path='/lose' exact>
          <LoseScreen />
        </Route>
        <Route path='/result' exact>
          <WinScreen />
        </Route>
        <Route path='/dev-genre' exact>
          <GenreQuestionScreen />
        </Route>
        <Route path='/dev-artist' exact>
          <ArtistQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
