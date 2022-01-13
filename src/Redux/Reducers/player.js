import { SAVE_EMAIL } from '../Actions/actionPlayer';

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
      gravatarEmail: state.gravatarEmail,
    };
  default:
    return state;
  }
};

export default playerReducer;
