import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { toggle } from '../../../redux/missions/missionsSlice';
import styles from './missionStyle.module.scss';

const variants = {
  initial: {
    opacity: 0,
    color: '#4285f4',
  },
  animate: {
    opacity: 1,
    color: '#737373',
  },
};

const variants2 = {
  start: {
    rotateX: 0,
  },
  finish: {
    rotateX: 360,
    backgroundColor: '#4285f4',
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
  end: {
    rotateX: 0,
    backgroundColor: '#737373',
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
};

const Mission = (props) => {
  const [join, setJoin] = useState();
  const {
    id, name, description, joined,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle(id));
  };

  useEffect(() => {
    setJoin(joined);
  }, [joined]);

  return (
    <motion.tr
      variants={variants}
    >
      <td className={styles.name}>
        <h2>
          {name}
        </h2>
      </td>
      <td className={styles.description}>
        <p>
          {description}
        </p>
      </td>
      <td className={styles.statusBadge}>
        {join ? (
          <motion.p
            variants={variants2}
            className={styles.join}
            initial="start"
            animate="finish"
          >
            Active Member
          </motion.p>
        )
          : (
            <motion.p
              variants={variants2}
              initial="finish"
              animate="end"
            >
              NOT A MEMBER
            </motion.p>
          )}
      </td>
      <td className={styles.statusBtn}>
        {join ? (
          <motion.button
            className={styles.join}
            type="button"
            onClick={() => handleClick()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            Leave Mission
          </motion.button>
        )
          : (
            <motion.button
              type="button"
              onClick={() => handleClick()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Join Mission
            </motion.button>
          )}
      </td>

    </motion.tr>
  );
};

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.string,
};

Mission.defaultProps = {
  joined: 'false',
};

export default Mission;
