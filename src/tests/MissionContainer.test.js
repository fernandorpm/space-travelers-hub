import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionContainer from '../components/missions/missionContainer/MissionContainer';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><MissionContainer /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
