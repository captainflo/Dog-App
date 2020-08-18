import { GET_BREED } from '../actions/types';
const INITIAL_STATE = {
  breedList: '',
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_BREED:
      return { ...state, breedList: action.payload };
    default:
      return state;
  }
}
