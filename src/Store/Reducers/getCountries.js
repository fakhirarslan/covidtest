import { GET_COUNTRIES } from '../Actions/getCountries';

const initialState = {
   countries: []
}

export const countriesReducer = (state = initialState, action) => {
   switch(action.type){
      case GET_COUNTRIES:
         return { ...state, countries: action.payload }

      default:
         return state;
   }
}