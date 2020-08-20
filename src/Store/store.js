import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allCountriesReducer } from './Reducers/getAllCountries';
import { countriesReducer } from './Reducers/getCountries';
import { countryReducer } from './Reducers/getSpecific';

export const store = createStore(
      combineReducers({
         allCountries: allCountriesReducer,
         countries: countriesReducer,
         country: countryReducer
      }),
      applyMiddleware(thunk)
   );