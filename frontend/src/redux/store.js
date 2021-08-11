import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import reducers from './reducers/index';

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

const newStore = {
  store,
  persistor
};

export default newStore;
