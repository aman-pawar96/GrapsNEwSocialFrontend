import {  BrowserRouter as Router,  Switch,  Route,  Link,Redirect
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Carrer from './Pages/Carrer';
import Apply from './Pages/Apply';
import Login from './Pages/Login';
import Candidature from './Pages/Candidature'
function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to="/aboutus"/>
      </Route>
      <Route exact path='/aboutus'>
        <AboutUs/>
      </Route>
      <Route exact path='/careers'>
        <Carrer/>
      </Route>
      <Route exact path='/apply/:id'>
        <Apply/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/candidates'>
        <Candidature/>
      </Route>
    </Router>

  );
}

export default App;
