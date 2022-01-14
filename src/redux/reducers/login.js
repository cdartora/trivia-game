import { LOGIN } from '../actions/actionLogin';

const INITIAL_STATE = {
  email: '',
  token: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
      token: action.token,
    };
  default:
    return state;
  }
};

export default userReducer;
