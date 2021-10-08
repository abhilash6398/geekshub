import React, { Component } from "react";
import axios from "./Axios";
// import "../style/product.css";
// import "../assets/css/style.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: [],
    };
  }
  getProductsData() {
    axios
      .get(`productPage`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const products = data.data.map((u) => (
          <div className="container">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                {/* <div class="titleview">
                  <span>Popular</span>
                </div> */}
              </div>
              <div class="shopviewint">
                <div
                  id="latestproducts"
                  class="owl-carousel latestproducts owl-theme"
                >
                  <div class="item clearfix">
                    <div class="productwtview">
                      <div class="imgview">
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/Quy4lNtQ4-shop_interst2.jpg"} alt="" style={{padding:"30px"}} />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/Quy4lNtQ4-shop_interst2.jpg"} alt="" style={{padding:"30px"}} />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/Quy4lNtQ4-shop_interst2.jpg"} alt="" style={{padding:"30px"}} />
                      </div>
                      <div class="proinfo">
                        <div class="pronm">{u.name}</div>
                        <div class="proprice">{u.price}</div>
                        <span class="newbtnvew">New</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProductsData();
  }
  render() {
    return <>{this.state.products}</>;
  }
}
