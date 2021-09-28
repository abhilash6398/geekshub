import Nav from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import Home from './Home';

function App() {
  return (
    <>
    <Router>
      <Nav />  
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/forgot" component={Forgot} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
