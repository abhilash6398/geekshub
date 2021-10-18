import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import RegisterCus from "./RegisterCus";
import Nav from "./Navbar";
import Home from "./Home";
import Login from "./Temp";
import Forgot from "./Forgot";
import Profile from "./Profile";
import Register from "./Register";
import useToken from "./useToken";
import Signup from "./signup";
import Reset from "./Reset";
import Product from "./Home/product";
import Banner from "./Home/banner";
import Category from "./Home/category";
import TopPicks from "./Home/topPicks";
import Brands from "./Home/brands";
import Vendor from "./Home/vendor";
import ProdDetails from "./Prod_Details";
import EditProfile from "./editProfile";
import Users from "./AllProduct";
import Address from "./address";
import Main from "./Main";
import Featured from "./Featured";
import Categories from "./Categories";
import Productt from "./Products";
import Baner from "./Baner";
import Aboutus from "./Aboutus";
import AddAddress from "./AddAddress";
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
          <a href="/"> Home </a> /<a href="/vendor"> Vendor Reg</a> /{" "}
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
          <Route path="/prodDetails">
            <ProdDetails />
          </Route>
          {/* <Route path="/logout"><Logout /></Route> */}
          <Route path="/addaddress">
            <AddAddress />
          </Route>
          <Route path="/editProfile">
            <EditProfile />
          </Route>
          <Route path="/productdetails">
            <Users />
          </Route>
          <Route path="/address">
            <Address />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/productt">
            <Productt />
          </Route>
          <Route path="/baner">
            <Baner />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
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
