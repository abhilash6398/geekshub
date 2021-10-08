import React, { Component } from "react";
import axios from "./Axios";
// import "../style/brands.css";
// import "../assets/css/style.css";

export default class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brands: [],
    };
  }
  getbrandsData() {
    axios
      .get(`brandsPage`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const brands = data.data.map((u) => (
          <div className="container">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                {/* <div class="titleview">
                  <span>brandsPage</span>
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
                        <img src={u.image.img} alt="" />
                      </div>
                      <div class="proinfo">
                        <div class="pronm">{u.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          brands,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getbrandsData();
  }
  render() {
    return <>{this.state.brands}</>;
  }
}
