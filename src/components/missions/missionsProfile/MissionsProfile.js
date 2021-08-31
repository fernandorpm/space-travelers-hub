import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMissions } from '../../../redux/missions/missionsSlice';

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
    <li
      key={mission.mission_id}
    >
      {mission.mission_name}
    </li>
  ));

  return (
    <>
      {allMissions
      && getallMissions(filter(allMissions))}

    </>
  );
};

export default MissionsProfile;
