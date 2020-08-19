import { GET_BREEDS, GET_BREED } from '../actions/types';
const INITIAL_STATE = {
  breeds: '',
  breed: '',
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_BREEDS:
      return { ...state, breeds: action.payload };
    case GET_BREED:
      return { ...state, breed: action.payload };
    default:
      return state;
  }
}
