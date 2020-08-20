export const GET_ALL = 'GET_ALL';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const GET_ALL_FAILURE = 'GET_ALL_FAILURE';

export const getAllCountries = (data) => {
   return (dispatch) => {
      dispatch({ type: GET_ALL, payload: data })
   }
}