export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';

export const getCountries = (data) => {
   return (dispatch) => {
      dispatch({ type: GET_COUNTRIES, payload: data })
   }
}