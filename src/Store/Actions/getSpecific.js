export const GET_SPECIFIC = 'GET_SPECIFIC';
export const GET_SPECIFIC_SUCCESS = 'GET_SPECIFIC_SUCCESS';
export const GET_SPECIFIC_FAILURE = 'GET_SPECIFIC_FAILURE';

export const getSpecific = (data) => {
   return (dispatch) => {
      dispatch({ type: GET_SPECIFIC, payload: data })
   }
}