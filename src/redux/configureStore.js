import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import missions from './missions/missionsSlice';

export default configureStore({
  reducer: {
    missions,
  },
  middleware: [thunk],
});
