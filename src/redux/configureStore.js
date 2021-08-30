import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import missions from './missions/missionsSlice';
import rockets from './rockets/rocketsSlice';

export default configureStore({
  reducer: {
    missions,
    rockets,
  },
  middleware: [thunk],
});
