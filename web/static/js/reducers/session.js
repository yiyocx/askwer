const initialState = {
  currentUser: null,
  error: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CURRENT_USER':
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        error: action.error
      });
    case 'SESSION_ERROR':
      return Object.assign({}, state, {error: action.error});
    case 'USER_LOGOUT':
      return initialState;
    default:
      return state;
  }
}
