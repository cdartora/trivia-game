import { SAVE_EMAIL, SAVE_USER } from '../actions/actionPlayer';

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
  default:
    return state;
  }
};

export default playerReducer;
