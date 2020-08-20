import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allCountriesReducer } from './Reducers/getAllCountries';
import { countriesReducer } from './Reducers/getCountries';

export const store = createStore(
      combineReducers({
         allCountries: allCountriesReducer,
         countries: countriesReducer,
      }),
      applyMiddleware(thunk)
   );