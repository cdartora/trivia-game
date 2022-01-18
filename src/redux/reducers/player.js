import { SAVE_EMAIL, SAVE_USER, UDPATE_SCORE }
from '../actions/actionPlayer';
import { QUESTIONS } from '../actions/actionLogin';

const INITIAL_STATE_PLAYER = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE_PLAYER, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      gravatarEmail: action.gravatarEmail,
    };
  case SAVE_USER:
    return {
      ...state,
      name: action.name,
    };
  case QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  case UDPATE_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};
export default playerReducer;
