import axios from 'axios';
import { GET_BREED, ERROR_BREED } from './types';

// Get List Breed
export const getBreedList = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    dispatch({ type: GET_BREED, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_BREED, payload: 'error' });
  }
};
