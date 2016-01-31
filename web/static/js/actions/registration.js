import { httpPost } from '../utils/utils';

const Actions = {};

Actions.signUp = (data) => {
  return dispatch => {
    httpPost('api/registration', {user: data})
    .then((data) => {
      localStorage.setItem('phoenixAuthToken', data.jwt);
    })
    .catch((error) => {
      error.response.json()
      .then((jsonError) => {
        dispatch({
          type: 'REGISTRATION_ERROR',
          errors: jsonError.errors,
        });
      });
    });
  }
}

export default Actions;
