const API_URL = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default fetchToken;
