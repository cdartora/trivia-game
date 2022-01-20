import fetchToken from './fetchToken';

const API_URL = (token) => `https://opentdb.com/api.php?amount=5&token=${token}`;

const fetchQuestions = async (token) => {
  if (!token) {
    const newToken = await fetchToken();
    token = newToken.token;
  }
  const response = await fetch(API_URL(token));
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default fetchQuestions;
