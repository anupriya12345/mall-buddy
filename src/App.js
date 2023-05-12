import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './components/Title';
import Navigationbar from './components/Navigationbar';
import Cities from './components/Cities';
import Berlin_malls from './components/Malls/Berlin_malls'
import Frankfurt_malls from './components/Malls/Frankfurt_malls'
import Munich_malls from './components/Malls/Munich_malls'
import Cologne_malls from './components/Malls/Cologne_malls'
import Hamburg_malls from './components/Malls/Hamburg_malls'
import Shops from './components/Shops';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />

        <Switch>
          <Route exact path='/' component={Title} />
          <Route path='/cities' component={Cities} />
          <Route path='/munich_malls' component={Munich_malls} />
          <Route path='/berlin_malls' component={Berlin_malls} />
          <Route path='/hamburg_malls' component={Hamburg_malls} />
          <Route path='/frankfurt_malls' component={Frankfurt_malls} />
          <Route path='/cologne_malls' component={Cologne_malls} />
          <Route path='/shops' component={Shops} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
