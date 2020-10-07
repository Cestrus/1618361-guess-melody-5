import React from 'react';
import PropTypes from 'prop-types';

const WinScreen = () => {
  const errorsQuantity = 6;
  const questionsQuantity = 3;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {errorsQuantity} вопросов и совершили {questionsQuantity} ошибки</p>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  );
};

WinScreen.propTypes = {
  errorsQuantity: PropTypes.number,
  questionsQuantity: PropTypes.number,
};

export default WinScreen;
