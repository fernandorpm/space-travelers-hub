import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../../redux/rockets/rocketsSlice';

import Rocket from '../rocket/Rocket';

const container = {
  loading: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

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
      <motion.div
        variants={container}
        initial="initial"
        animate={allRockets.length > 0 ? 'animate' : 'loading'}
      >
        {createRockets()}
      </motion.div>
      )}
    </>
  );
};

export default RocketContainer;
