import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { motion } from 'framer-motion';
import { fetchAllMissions } from '../../redux/missions/missionsSlice';

const MissionContainer = () => {
  const dispatch = useDispatch();
  const allMissions = useSelector((state) => state.missions.entities);

  useEffect(() => {
    dispatch(fetchAllMissions());
  }, []);

  const createMissions = () => allMissions.map((mission) => (
    <div key={mission.mission_id}>
      {mission.mission_name}
    </div>
  ));

  return (
    <>
      {allMissions
      && (
      <ul>
        {createMissions()}
      </ul>
      )}
    </>
  );
};

export default MissionContainer;
