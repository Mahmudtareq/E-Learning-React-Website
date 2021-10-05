
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './component/AboutUs/AboutUs';
import OurCourse from './component/OurCourse/OurCourse';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/course">
            <OurCourse></OurCourse>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
