import React, { Component } from "react";
import axios from "./Home/Axios";
import "../style/Product-list.css";
import discount from "../assets/images/view_Ads.jpg";
import Bannerr from "./Bannerr";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get(`/productList`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log(data.data[0].image._id);
        const users = data.data.map((u) => (
          // <div>
          // <p>{u.desc}</p>
          // <img src={u.img} alt=" "/>
          // </div>

          <div className="row clearfix">
            <div className="col-sm-4">
              <div className="productwtview">
                <div className="imgview">
                  <img
                    src={
                      "http://3.109.247.241/node-team-B/geekshub/uploads/hb_RZpNbc-latestpro4.png"
                    }
                    alt=""
                  />
                </div>
                <div className="proinfo">
                  <div className="pronm">{u.name}</div>
                  <div className="proprice">Rs. {u.price}</div>
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return (
      <div>
        <Bannerr />

        <div style={{ display: "flex" }}>
          <div className="col-sm-4 clearfix ">
            <div className="row-sm-4">
              <h1 className="headinggetbox">INTERESTS</h1>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Iron Man</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Wonder Woman</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Harry Potter</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Got</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Frozen</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Iron Man</p>
              </div>
            </div>
            <div className="row clearfix ">
              <div>
                <p className="ironparabox">Wonder Woman</p>
              </div>
            </div>

            <div className="row clearfix  ">
              <div className="row-sm-4">
                <div>
                  <p className="priceparatext">COLOR</p>
                </div>
              </div>
            </div>

            <div className="row clearfix  ">
              <div className="row-sm-4">
                <div>
                  <p className="priceparatext">SIZE</p>
                </div>
              </div>
            </div>
            <div className="row clearfix  ">
              <div className="col-sm-2">
                <div className="sizeconbox">
                  <p className="sizebox">L</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="sizeconbox">
                  <p className="sizebox">M</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="sizeconbox">
                  <p className="sizebox">S</p>
                </div>
              </div>
            </div>
            <div className="row clearfix  ">
              <div className="col-sm-2">
                <div className="sizeconbox">
                  <p className="sizebox1">XL</p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="sizeconbox">
                  <p className="sizebox2">XXL</p>
                </div>
              </div>
            </div>

            <div className="row clearfix  ">
              <div className="row-sm-4">
                <div>
                  <p className="priceparatext">PRICE</p>
                </div>
              </div>

              <div className="row-sm-4">
                <div className="filter">
                  <div
                    id="sliderPrice"
                    className="filter__slider-price"
                    data-min="0"
                    data-max="100"
                    data-step="5"
                  ></div>
                </div>
              </div>
              <div className="row-sm-4">
                <div>
                  <p className="pricedollarbox">Price: $52 - $80</p>
                </div>
              </div>
            </div>

            <div className="row clearfix  ">
              <div>
                <img className="imageoffbox" src={discount} alt=" " />
              </div>
            </div>
          </div>
          <div classNameName="products" className="col-sm-8 clearfix">
            <div className="row clearfix">
              <h1 className="headinggetbox">Popular</h1>
              <span className="spanline"></span>
            </div>
            {this.state.users}
          </div>
        </div>
      </div>
    );
  }
}
