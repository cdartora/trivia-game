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

export const UPDATE_ANSWERS_COUNT = 'UPDATE_ANSWERS_COUNT';
export const updateAnswersCount = (correctAnswers) => ({
  type: UPDATE_ANSWERS_COUNT,
  correctAnswers,
});

export const loginHandler = (email) => (dispatch) => {
  fetchToken()
    .then(
      ({ token }) => {
        dispatch(userLogin(email));
        dispatch(getRequestToken(token));
        fetchQuestions(token)
          .then((questions) => {
            dispatch(saveQuestions(questions.results));
          });
      },
    );
};
