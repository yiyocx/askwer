import { createStore } from 'redux';
import registration from '../reducers/registration';

export default function configureStore() {
  return createStore(registration);
}
