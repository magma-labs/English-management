import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'loginReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
  let store = createStore(persistedReducer,{}, applyMiddleware(ReduxThunk));
  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
}

