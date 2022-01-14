const API_URL = (token) => `https://opentdb.com/api.php?amount=5&token=${token}`;

const fetchQuestions = (token) => fetch(API_URL(token)).then(
  (response) => response.json().then(
    (json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)),
  ),
);

export default fetchQuestions;
