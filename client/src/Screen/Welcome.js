import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import Loading from '../components/UI/Loading/Loading';
import Select from '../components/UI/Select/Select';

const Welcome = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBreedList());
  }, [dispatch]);

  // state from Redux
  const breeds = useSelector((state) => state.breedList.breeds);

  return (
    <div>
      Welcome Puppies
      {breeds ? <Select breeds={breeds} /> : <Loading />}
    </div>
  );
};

export default Welcome;
