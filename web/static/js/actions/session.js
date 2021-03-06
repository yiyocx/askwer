import { routeActions } from 'react-router-redux';
import { httpPost, httpGet, httpDelete } from '../utils/utils';
import { Socket } from "phoenix";

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
        dispatch(routeActions.push("/"));
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

  currentUser: function() {
    return dispatch => {
      httpGet('/api/current_user')
      .then((data) => {
        setCurrentUser(dispatch, data);
      })
      .catch((error) => {
        console.log(error);
      });
    };
  },

  logout: function() {
    return dispatch => {
      httpDelete('api/session')
      .then((data) => {
        localStorage.removeItem('phoenixAuthToken');
        dispatch({
          type: 'USER_LOGOUT',
        });
        dispatch(routeActions.push("/login"));
      })
      .catch((error) => {
        console.log(error);
      });
    };
  },
};

function setCurrentUser(dispatch, user) {
  dispatch({
    type: 'CURRENT_USER',
    currentUser: user,
  });

  const socket = new Socket('/socket', {
    params: { token: localStorage.getItem('phoenixAuthToken')},
  });

  socket.connect();

  const channel = socket.channel(`users:${user.id}`);

  channel.join().receive('ok', () => {
    dispatch({
      type: 'SOCKET_CONNECTED',
      socket: socket,
      channel: channel,
    });
  });
};

export default sessionActions;
