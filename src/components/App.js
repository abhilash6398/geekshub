import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import RegisterCus from "./RegisterCus";
import Nav from "./Navbar";
import Home from "./Home";
import Login from "./Temp";
import Forgot from "./Forgot";
import Profile from "./Profile";
import Register from "./Register";
import useToken from "./useToken";
import FooterComponent from "./Footer";
import Signup from "./signup";
import Reset from "./Reset";
import Product from "./product";
import Banner from "./banner";
import Category from "./category";
import TopPicks from "./topPicks";
import Brands from "./brands";
import Vendor from "./vendor";
// import axios from 'axios';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  // Logout
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h4 class="smheading">
          {/* <a href="/home"> Home </a> / <a href="/profile">My Profile</a> /{" "} */}
          <a href="/"> Home </a> / 
          <a href="/vendor"> Vendor Reg</a> /{" "}
          <a href="/forgot"> Forgot Password </a> /{" "}
          <a href="/reset"> Reset Password </a> /{" "}
          <a href="/login" onClick={logOut}>
            Logout
          </a>
          {/* / <a href="/vendor">Logout</a> */}
        </h4>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/vendor">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/banner">
            <Banner />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/topPicks">
            <TopPicks />
          </Route>
          <Route path="/brands">
            <Brands />
          </Route>
          <Route path="/vendorpage">
            <Vendor />
          </Route>
          {/* <Route path="/logout"><Logout /></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

// {/* <Nav/>
//     <Login/>
//     <Register/>
//     <Forgot/>
//     <RegisterCus/>
// ***
//      <Router>
//       <Nav />
//       <Switch>
//       <Route path="/"  exact component={Home} />
//         {/* <Route path="/login" component={Login} /> */}
//         {/* <Route path="/customer" component={RegisterCus} />
//         <Route path="/vendor" component={Register} />
//         <Route path="/forgot" component={Forgot} />
//       </Switch> */}
//     {/* </Router>  */}
