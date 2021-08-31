import RocketsProfile from '../components/rockets/rocketsProfile/RocketsProfile';
import MissionsProfile from '../components/missions/missionsProfile/MissionsProfile';
import styles from './profileStyle.module.scss';

const Profile = () => (
  <div className={styles.mainContainer}>
    <section className={styles.missionsContainer}>
      <h1>My Missions</h1>
      <MissionsProfile />
    </section>
    <section className={styles.rocketsContainer}>
      <h1>My Rockets</h1>
      <RocketsProfile />
    </section>

  </div>
);

export default Profile;
