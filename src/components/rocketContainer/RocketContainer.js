import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { motion } from 'framer-motion';
import { fetchAllRockets } from '../../redux/rockets/rocketsSlice';

const RocketContainer = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rockets.entities);

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  const createRockets = () => allRockets.map((rocket) => (
    <div key={rocket.id}>
      {rocket.rocket_name}
    </div>
  ));

  return (
    <>
      {allRockets
      && (
      <ul>
        {createRockets()}
      </ul>
      )}
    </>
  );
};

export default RocketContainer;
