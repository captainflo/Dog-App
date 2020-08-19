import axios from 'axios';
import { GET_BREEDS, ERROR_BREED, GET_BREED } from './types';

// Get List Breeds
export const getBreedList = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    dispatch({ type: GET_BREEDS, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_BREED, payload: 'error' });
  }
};

// Get Detail Breed
export const getBreed = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/images/search?breed_id=${id}&limit=10`
    );
    dispatch({ type: GET_BREED, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR_BREED, payload: 'error' });
  }
};
