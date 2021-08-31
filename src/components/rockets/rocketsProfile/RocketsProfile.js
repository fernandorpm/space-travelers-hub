import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../../redux/rockets/rocketsSlice';

const RocketsProfile = () => {
  const allRockets = useSelector((state) => state.rockets.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allRockets.length === 0) {
      dispatch(fetchAllRockets());
    }
  }, [dispatch]);

  const filterRockets = (rocketList) => rocketList.filter((rocket) => rocket.reserved === 'true');

  const getAllRockets = (rocketList) => rocketList.map((rocket) => (
    <h1
      key={rocket.id}
    >
      {rocket.rocket_name}
    </h1>
  ));

  return (
    <>
      {allRockets
      && getAllRockets(filterRockets(allRockets))}

    </>
  );
};

export default RocketsProfile;
