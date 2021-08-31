import { motion } from 'framer-motion';
import RocketsProfile from '../components/rockets/rocketsProfile/RocketsProfile';
import MissionsProfile from '../components/missions/missionsProfile/MissionsProfile';
import styles from './profileStyle.module.scss';

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Profile = () => (
  <div className={styles.mainContainer}>
    <section className={styles.missionsContainer}>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
      >
        My Missions
      </motion.h1>
      <div>
        <motion.ul
          variants={container}
          initial="initial"
          animate="animate"
        >
          <MissionsProfile />
        </motion.ul>
      </div>
    </section>
    <section className={styles.rocketsContainer}>
      <h1>
        My Rockets
      </h1>
      <div>
        <ul>
          <RocketsProfile />
        </ul>
      </div>
    </section>

  </div>
);

export default Profile;
