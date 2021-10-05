import React from "react";
import Nav from "./Navbar";
import { Link } from "react-router-dom";
import {
  disney,
  marvel,
  dclogo,
  harrypotter,
  gamethrones,
  Banimg,
  Banimg2,
  pro1,
  pro3,
  pro4,
  pro2,
  shopInterest4,
  shopInterest,
  shopInterest2,
  shopInterest3,
  shopInterest1,
  CategoryImage,
  CategoryImage2,
  hamleys,
  fantasy,
  toys,
  latestpro1,
  latestpro2,
  latestpro3,
  latestpro4,
} from "../assets/images";
import "../assets/css/font-awesome.min.css";
import "../assets/css/intlTelInput.css";
import "../assets/css/jquery.exzoom.css";
import "../assets/css/media.css";
import "../assets/css/animate.min.css";
// import 'owl.carousel/dist/assets/owl.carousel.css';
import FooterComponent from "./Footer";
function Home() {
  return (
    <>
      <div className="homepgwrap">
        {/* <!--Banner Start Here--> */}
        <div className="homeban">
          <div id="bannerslider" className="owl-carousel owl-theme">
            <div className="item clearfix">
              <img
                className="img-responsive"
                src={Banimg}
                alt="Banner"
                style={{ width: "1300px", height: "500px" }}
              />{" "}
            </div>
            {/* <div className="item clearfix">
              <img className="img-responsive" src={Banimg2} alt="Banner" style={{width:"1300px",height:"500px"}} />{" "}
            </div> */}
          </div>
        </div>
        {/* <!--Banner End Here--> */}

        {/* <!--Home Page Middle Section Start Here--> */}
        <div className="homepgmiddleCon">
          {/* <!--Brands Row Start Here--> */}
          <div
            id="brandslogo"
            className="brandslogo"
            style={{ marginLeft: "75px" }}
          >
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                <img src={marvel} alt="" />
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                <img src={dclogo} alt="" />
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                <img src={harrypotter} alt="" />
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                <img src={gamethrones} alt="" />
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                <img
                  src={disney}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                {/* <img src={marvel} alt="" /> */}
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                {/* <img src={dclogo} alt="" /> */}
              </div>
            </div>
            <div
              className="item clearfix"
              style={{ display: "inline-block", padding: "20px" }}
            >
              <div className="brandsbx">
                {/* <img src={harrypotter} alt="" /> */}
              </div>
            </div>
          </div>
          {/* <!--Brands Row End Here--> */}

          {/* <!--Tabs Featured Section Start Here--> */}
          <div className="tabsfeature">
            {/* <div className="tabsrw">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#toppicks">
                    Top Picks
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#arrivals">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#featured">
                    Featured
                  </a>
                </li>
                <li>
                  <Link to="/feature">Featured</Link>
                </li>
              </ul>
            </div> */}
            <div className="card-deck">
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-deck">
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-6 col-sm-4 col-md-3 padzero"
                style={{ padding: "10px" }}
              >
                <div
                  className="card"
                  style={{ width: "18rem", display: "flex" }}
                >
                  <img className="card-img-top" src={pro1} />
                </div>
                <div className="proinfo" style={{ textAlign: "center" }}>
                  <div className="pronm">Ceramic Monster Figurine</div>
                  <div className="proprice">
                    <strong>US$ 24.99</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="tab-content">
              <div id="toppicks" className="tab-pane fade in active">
                <div className="productslistbox">
                  <div className="row mnlist clearfix">
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="arrivals" className="tab-pane fade">
                <div className="productslistbox">
                  <div className="row mnlist clearfix">
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="featured" className="tab-pane fade">
                <div className="productslistbox">
                  <div className="row mnlist clearfix">
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3 padzero">
                      <div className="productwtview">
                        <div className="imgview">
                          <img src={pro1} alt="" />
                        </div>
                        <div className="proinfo">
                          <div className="pronm">Ceramic Monster Figurine</div>
                          <div className="proprice">US$ 24.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <br />
          <h4 style={{ textAlign: "center" }}>
            <strong>Shop By Interest</strong>
          </h4>
          <br />
          <div class="card-group">
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img
                class="card-img-top"
                src={shopInterest}
                alt="Card image cap"
              />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img
                class="card-img-top"
                src={shopInterest1}
                alt="Card image cap"
              />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img
                class="card-img-top"
                src={shopInterest2}
                alt="Card image cap"
              />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img
                class="card-img-top"
                src={shopInterest3}
                alt="Card image cap"
              />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img
                class="card-img-top"
                src={shopInterest4}
                alt="Card image cap"
              />
            </div>
          </div>
          <br />
          <h4 style={{ textAlign: "center" }}>
            <strong>Shop By Category</strong>
          </h4>
          <br />
          <div className="card-group mb-3" style={{ marginLeft: "200px" }}>
            <div className="col-xd-6" style={{ padding: "50px" }}>
              <p>Notebooks</p>
              <h6>The new collection of evening Dress</h6>
              <p>See the new collection and chose what you like</p>
              <br />
              <button className="btn btn-warning"> SHOP NOW </button>
            </div>
            <div className="col-xd-6">
              <img
                class="card-img-top"
                src={CategoryImage}
                alt="Card image cap"
                style={{ width: "18rem", padding: "10px" }}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="card-group mb-3" style={{ marginLeft: "200px" }}>
            <div className="col-xd-6" style={{ padding: "50px" }}>
              <p>Notebooks</p>
              <h6>The new collection of evening Dress</h6>
              <p>See the new collection and chose what you like</p>
              <br />
              <button className="btn btn-warning"> SHOP NOW </button>
            </div>
            <div className="col-xd-6">
              <img
                class="card-img-top"
                src={CategoryImage2}
                alt="Card image cap"
                style={{ width: "18rem", padding: "10px", height: "18rem" }}
              />
            </div>
          </div>
          <br />
          <br />
          <h4 style={{ textAlign: "center" }}>
            <strong>Shop By Vendor</strong>
          </h4>
          <br />
          <div class="card-group">
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img class="card-img-top" src={disney} alt="Card image cap" />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img class="card-img-top" src={hamleys} alt="Card image cap" />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img class="card-img-top" src={fantasy} alt="Card image cap" />
            </div>
            <div className="card" style={{ width: "18rem", padding: "10px" }}>
              <img class="card-img-top" src={toys} alt="Card image cap" />
            </div>
          </div>
          <br />
          <br />
          <h4 style={{ textAlign: "center" }}>
            <strong>Latest Products</strong>
          </h4>
          <br />
          <div className="card-deck">
            <div
              className="col-xs-6 col-sm-4 col-md-3 padzero"
              style={{ padding: "10px" }}
            >
              <div className="card" style={{ width: "18rem", display: "flex" }}>
                <img
                  className="card-img-top"
                  src={latestpro1}
                  style={{ height: "18rem", marginLeft: "30px" }}
                />
              </div>
              <div className="proinfo" style={{ textAlign: "center" }}>
                <div className="pronm">Ceramic Monster Figurine</div>
                <div className="proprice">
                  <strong>US$ 24.99</strong>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-4 col-md-3 padzero"
              style={{ padding: "10px" }}
            >
              <div className="card" style={{ width: "18rem", display: "flex" }}>
                <img
                  className="card-img-top"
                  src={latestpro4}
                  style={{ height: "18rem" }}
                />
              </div>
              <div className="proinfo" style={{ textAlign: "center" }}>
                <div className="pronm">Ceramic Monster Figurine</div>
                <div className="proprice">
                  <strong>US$ 24.99</strong>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-4 col-md-3 padzero"
              style={{ padding: "10px" }}
            >
              <div className="card" style={{ width: "18rem", display: "flex" }}>
                <img
                  className="card-img-top"
                  src={latestpro3}
                  style={{ height: "18rem" }}
                />
              </div>
              <div className="proinfo" style={{ textAlign: "center" }}>
                <div className="pronm">Ceramic Monster Figurine</div>
                <div className="proprice">
                  <strong>US$ 24.99</strong>
                </div>
              </div>
            </div>
            <div
              className="col-xs-6 col-sm-4 col-md-3 padzero"
              style={{ padding: "10px" }}
            >
              <div className="card" style={{ width: "18rem", display: "flex" }}>
                <img
                  className="card-img-top"
                  src={latestpro2}
                  style={{ height: "18rem" }}
                />
              </div>
              <div className="proinfo" style={{ textAlign: "center" }}>
                <div className="pronm">Ceramic Monster Figurine</div>
                <div className="proprice">
                  <strong>US$ 24.99</strong>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Tabs Featured Section End Here--> */}
        </div>
        {/* <!--Home Page Middle Section End Here--> */}
      </div>
      <FooterComponent/>
    </>
  );
}

export default Home;
