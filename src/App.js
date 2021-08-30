import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import Navbar from './components/shared/Navbar';

import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

function App() {
  return (
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
  );
}

export default App;
