import { httpPost } from '../utils/utils';

const sessionActions = {
  login: function(email, password) {
    return dispatch => {
      let data = {session: {
        email: email,
        password: password,
      }};
      httpPost('/api/session', data)
      .then((data) => {
        localStorage.setItem('phoenixAuthToken', data.jwt);
        setCurrentUser(dispatch, data.user);
      })
      .catch((error) => {
        error.response.json()
        .then((errorJson) => {
          dispatch({
            type: 'SESSION_ERROR',
            error: errorJson.error,
          });
        });
      });
    };
  },

};

function setCurrentUser(dispatch, user) {
  dispatch({
    type: 'CURRENT_USER',
    currentUser: user,
  });
};

export default sessionActions;
