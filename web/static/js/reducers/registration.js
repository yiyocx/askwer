const initialState = {
  errors: null,
};

export default function registration(state = initialState, action = {}) {
  switch (action.type) {
    case 'REGISTER_USER':
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
}
