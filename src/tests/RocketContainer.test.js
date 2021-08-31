import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketContainer from '../components/rockets/rocketContainer/RocketContainer';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><RocketContainer /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
