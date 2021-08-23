import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userFollowings, userReducer } from './userReducer';

// persist state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['allResource']
};

const rootReducer = combineReducers({
  allResource: userReducer,
  followingsData: userFollowings
});

export default persistReducer(persistConfig, rootReducer);
