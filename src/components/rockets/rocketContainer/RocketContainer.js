import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../../redux/rockets/rocketsSlice';

import Rocket from '../rocket/Rocket';

const RocketContainer = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rockets.entities);

  useEffect(() => {
    if (allRockets.length === 0) {
      dispatch(fetchAllRockets());
    }
  }, [dispatch]);

  const createRockets = () => allRockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      name={rocket.rocket_name}
      description={rocket.description}
      image={rocket.flickr_images[0]}
      reserved={rocket.reserved}
    />
  ));

  return (
    <>
      {allRockets
      && (
      <div>
        {createRockets()}
      </div>
      )}
    </>
  );
};

export default RocketContainer;
