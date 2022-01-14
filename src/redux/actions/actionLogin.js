import fetchToken from '../helpers/fetchToken';
import saveToken from '../helpers/saveToken';

export const LOGIN = 'LOGIN';

export const userLogin = (email, token) => {
  // salva o token no localStorage
  saveToken(token);

  return {
    type: LOGIN,
    email,
    token,
  };
};

export const loginHandler = (email) => (dispatch) => {
  fetchToken().then(
    (data) => dispatch(userLogin(email, data.token)),
  );
};
