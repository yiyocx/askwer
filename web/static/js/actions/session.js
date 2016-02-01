import { httpPost } from '../utils/utils';

const sessionActions = {
  login: function(email, password) {
    return dispatch => {
      let data = {session: {
        email: email,
        password: password,
      }};
      httpPost('/api/session', data)
    }
  },

};

export default sessionActions;
