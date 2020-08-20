import { GET_ALL } from '../Actions/getAll';

const initialState = {
   countries: []
}

export const allCountriesReducer = (state = initialState, action) => {
   switch(action.type){
      case GET_ALL:
         return { ...state, countries: action.payload }

      default:
         return state;
   }
}