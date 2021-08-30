import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/shared/Navbar';

import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/my-profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Rockets />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
