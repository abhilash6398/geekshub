import Nav from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import Home from './Home';
import Signup from './signup';

function App() {
  return (
    <>
    <Router>
      <Nav />  
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot" component={Forgot} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
