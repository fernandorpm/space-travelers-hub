import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMissions } from '../../../redux/missions/missionsSlice';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const MissionsProfile = () => {
  const allMissions = useSelector((state) => state.missions.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allMissions.length === 0) {
      dispatch(fetchAllMissions());
    }
  }, [dispatch]);

  const filter = (list) => list.filter((mission) => mission.reserved === 'true');

  const getallMissions = (list) => list.map((mission) => (
    <motion.li
      key={mission.mission_id}
      variants={variants}
    >
      {mission.mission_name}
    </motion.li>
  ));

  return (
    <>
      {allMissions
      && getallMissions(filter(allMissions))}

    </>
  );
};

export default MissionsProfile;
