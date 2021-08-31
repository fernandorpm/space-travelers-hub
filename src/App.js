import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import style from './app.module.scss';

import Navbar from './components/shared/navbar/Navbar';
import Profile from './pages/Profile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className={style.container}>
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
