import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchAllMissions } from '../../../redux/missions/missionsSlice';
import Mission from '../mission/Mission';
import styles from './missionContainerStyle.module.scss';

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const MissionContainer = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missions.entities);

  useEffect(() => {
    if (allMissions.length === 0) {
      dispatch(fetchAllMissions());
    }
  }, [dispatch]);

  const createMissions = (list) => list.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      name={mission.mission_name}
      description={mission.description}
      joined={mission.reserved}
    />
  ));

  return (
    <>
      {allMissions
      && (
      <motion.table
        className={styles.mainContainer}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {createMissions(allMissions)}
      </motion.table>
      )}
    </>
  );
};

export default MissionContainer;
