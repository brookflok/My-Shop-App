import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import DrawerNavigation from './navigation/DrawerNavigation';
import productReducer from './store/reducers/productsReducer';

enableScreens()

//Creating rootReducer where you can put more reducers
const rootReducer = combineReducers({
  products: productReducer
})
//Creating a store
const store = createStore(rootReducer, composeWithDevTools())


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}

