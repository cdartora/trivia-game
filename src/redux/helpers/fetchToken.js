const API_URL = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = () => fetch(API_URL)
  .then((response) => response
    .json()
    .then(
      (json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)),
    ));

export default fetchToken;
