import { createStore } from 'redux';
import sales from './reducer';

const store = createStore(
  sales,
  {
    sales: [],
    grouped: {},
  },
);

export default store;
