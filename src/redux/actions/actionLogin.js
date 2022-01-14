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

export const loginHandler = (email) => (dispatch) => {
  fetchToken().then(
    (data) => {
      dispatch(userLogin(email));
      dispatch(getRequestToken(data.token));
      fetchQuestions(data.token).then((questions) => console.log(questions.results));
    },
  );
};
