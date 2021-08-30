/* eslint-disable react/prop-types */
import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { motion } from 'framer-motion';
import { toggle } from '../../redux/missions/missionsSlice';
import styles from './missionStyle.module.scss';

const Mission = (props) => {
  const [reserved, setReserved] = useState();
  const {
    id, name, description, member,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle(id));
  };

  useEffect(() => {
    setReserved(member);
  }, [member]);

  return (
    <tr>
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
        <p>
          {reserved}
        </p>
      </td>
      <td className={styles.statusBtn}>
        <button
          type="button"
          onClick={() => handleClick()}
        >
          Join mission
        </button>
      </td>

    </tr>
  );
};

export default Mission;
