import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/index';
import Loading from '../components/UI/Loading/Loading';
import Card from '../components/UI/Card/Card';
import './Breed.css';

const Breed = (props) => {
  console.log(props.location);
  const [isLoaded, setIsLoaded] = useState(false);
  const breed = useSelector((state) => state.breedList.breed);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(true);
    dispatch(actions.getBreed(props.match.params.id)).then(() => {
      setIsLoaded(false);
    });
  }, [dispatch, props.match.params.id]);

  if (isLoaded) {
    return <Loading />;
  }

  return (
    <div>
      {breed ? (
        <div>
          <div className="wrapper-breed">
            <img className="avatar-dog" src={breed[0].url} alt="dog" />
            <h2>{breed[0].breeds[0].name}</h2>
          </div>
          <div className="info">
            <p>
              <strong>Breed group:</strong> {breed[0].breeds[0].breed_group}
            </p>
            <p>
              <strong>Life span:</strong> {breed[0].breeds[0].life_span}
            </p>
            <p>
              <strong>Origin:</strong> {breed[0].breeds[0].origin}
            </p>
            <p>
              <strong>Height:</strong> {breed[0].breeds[0].height.imperial}{' '}
              inches
            </p>
            <p>
              <strong>Weight:</strong> {breed[0].breeds[0].weight.imperial}{' '}
              pound (lb)
            </p>
          </div>
          <p className="temperament">
            <strong>Temperament:</strong> {breed[0].breeds[0].temperament}
          </p>
          <div className="carousel-dog">
            {breed.map((img, idx) => {
              return <Card img={img.url} key={idx} index={idx} />;
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Breed;
