import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Home from './info';
import configureStore from './redux/store';
import NavigationStack from './src/navigation'

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack />
      </PersistGate>
    </Provider>
  );
};


export default App;
