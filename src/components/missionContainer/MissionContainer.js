import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { motion } from 'framer-motion';
import { fetchAllMissions } from '../../redux/missions/missionsSlice';
import Mission from '../mission/Mission';
import styles from './missionContainerStyle.module.scss';

const MissionContainer = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missions.entities);

  useEffect(() => {
    dispatch(fetchAllMissions());
  }, [dispatch]);

  const createMissions = (list) => list.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      name={mission.mission_name}
      description={mission.description}
      member={mission.reserved}
    />
  ));

  return (
    <>
      {allMissions
      && (
      <table className={styles.mainContainer}>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {createMissions(allMissions)}
      </table>
      )}
    </>
  );
};

export default MissionContainer;
