import { GET_REQUEST } from '../actions/actionLogin';

let INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_REQUEST:
    INITIAL_STATE = action.token;
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default token;
