import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import Loading from '../components/UI/Loading/Loading';

const Breed = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBreed(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  // state from Redux
  const breed = useSelector((state) => state.breedList.breed);

  return (
    <div>
      {breed ? (
        <div>
          <p>{breed[0].breeds[0].name}</p>
          <p>{breed[0].breeds[0].breed_group}</p>
          <p>{breed[0].breeds[0].life_span}</p>
          <p>{breed[0].breeds[0].origin}</p>
          <p>{breed[0].breeds[0].temperament}</p>
          <p>{breed[0].breeds[0].height.imperial}</p>
          <p>{breed[0].breeds[0].height.metric}</p>
          {breed.map((img) => {
            return (
              <img
                style={{ width: 100 }}
                key={img.url}
                src={img.url}
                alt={img.url}
              />
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Breed;
