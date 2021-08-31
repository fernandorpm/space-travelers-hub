import RocketsProfile from '../components/rockets/rocketsProfile/RocketsProfile';
import MissionsProfile from '../components/missions/missionsProfile/MissionsProfile';
import styles from './profileStyle.module.scss';

const Profile = () => (
  <div className={styles.mainContainer}>
    <section className={styles.missionsContainer}>
      <h1>My Missions</h1>
      <div>
        <ul>
          <MissionsProfile />
        </ul>
      </div>
    </section>
    <section className={styles.rocketsContainer}>
      <h1>My Rockets</h1>
      <div>
        <ul>
          <RocketsProfile />
        </ul>
      </div>
    </section>

  </div>
);

export default Profile;
