import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import Loading from '../components/UI/Loading/Loading';
import Select from '../components/UI/Select/Select';
import Banner from '../components/UI/Banner/Banner';
import './Welcome.css';
const Welcome = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBreedList());
  }, [dispatch]);

  // state from Redux
  const breeds = useSelector((state) => state.breedList.breeds);

  return (
    <div>
      <Banner />
      <div className="select">
        <h2>Select Your Favorite Dog</h2>
        {breeds ? <Select breeds={breeds} /> : <Loading />}
      </div>
    </div>
  );
};

export default Welcome;
