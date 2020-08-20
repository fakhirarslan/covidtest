import { GET_SPECIFIC } from '../Actions/getSpecific';

const initialState = {
   country: []
}

export const countryReducer = (state = initialState, action) => {
   switch(action.type){
      case GET_SPECIFIC:
         return { ...state, country: action.payload }

      default:
         return state;
   }
}