import fetchQuestions from '../helpers/fetchQuestions';
import fetchToken from '../helpers/fetchToken';
import saveToken from '../helpers/saveToken';

export const LOGIN = 'LOGIN';

export const userLogin = (email) => ({
  type: LOGIN,
  email,
});

export const GET_REQUEST = 'GET_REQUEST';

export const getRequestToken = (token) => {
  // salva o token no localStorage
  saveToken(token);

  return {
    type: GET_REQUEST,
    token,
  };
};

export const QUESTIONS = 'QUESTIONS';

export const saveQuestions = (questions) => ({
  type: QUESTIONS,
  questions,
});

export const loginHandler = (email) => async (dispatch) => {
  dispatch(userLogin(email));
  const { token } = await fetchToken();
  dispatch(getRequestToken(token));
};

const validateToken = async (token, dispatch) => {
  if (!token) {
    const data = await fetchToken();
    dispatch(getRequestToken(data.token));
  }
};

export const handleQuestions = () => async (dispatch, getState) => {
  const { token } = getState();
  const ERROR = 3;

  validateToken(token, dispatch);

  const { results, response_code: responseCode } = await fetchQuestions(token);

  if (responseCode === ERROR) {
    const newToken = await fetchToken();
    dispatch(getRequestToken(token));
    const newResults = await fetchQuestions(newToken).results;
    dispatch(saveQuestions(newResults));
  } else {
    dispatch(saveQuestions(results));
  }
};
