import fetchToken from './fetchToken';

const API_URL = (token) => `https://opentdb.com/api.php?amount=5&token=${token}`;
const codeExpired = 3;

const fetchQuestions = (token) => fetch(API_URL(token)).then(
  (response) => response.json().then(
    (json) => {
      console.log(json.response_code);
      if (json.response_code === codeExpired) {
        fetchToken().then(({ t }) => fetchQuestions(t));
      } else {
        return response.ok ? Promise.resolve(json) : Promise.reject(json);
      }
    },
  ),
);

export default fetchQuestions;
