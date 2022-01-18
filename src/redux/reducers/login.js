import { LOGIN, UPDATE_ANSWERS_COUNT } from '../actions/actionLogin';

const INITIAL_STATE = {
  email: '',
  correctAnswers: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
    };
  case UPDATE_ANSWERS_COUNT:
    return {
      ...state,
      correctAnswers: action.correctAnswers,
    };
  default:
    return state;
  }
};

export default userReducer;
