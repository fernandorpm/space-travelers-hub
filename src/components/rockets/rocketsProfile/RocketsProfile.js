import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../../redux/rockets/rocketsSlice';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
    color: '#4285f4',
  },
  animate: {
    opacity: 1,
    y: 0,
    color: '#737373',
  },
};

const RocketsProfile = () => {
  const allRockets = useSelector((state) => state.rockets.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allRockets.length === 0) {
      dispatch(fetchAllRockets());
    }
  }, [dispatch]);

  const filterRockets = (rocketList) => rocketList.filter((rocket) => rocket.reserved);

  const getAllRockets = (rocketList) => rocketList.map((rocket) => (
    <motion.li
      variants={variants}
      key={rocket.id}
    >
      {rocket.rocket_name}
    </motion.li>
  ));

  return (
    <>
      {allRockets
      && getAllRockets(filterRockets(allRockets))}

    </>
  );
};

export default RocketsProfile;
