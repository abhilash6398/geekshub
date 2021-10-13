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
          <div className="container-fluid">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                <div class="titleview">
                  <span>brandsPage</span>
                </div>
              </div>
              <div class="shopviewint">
                <div
                  id="latestproducts"
                  class="owl-carousel latestproducts owl-theme"
                >
                  <div class="item clearfix">
                    <div class="productwtview">
                      <div class="imgview">
                        {/* <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/zfUrnu1Yt-disney.jpg"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/Sw5Z7sfIH-dc-logo.png"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/gBtuvIA23-fantasy-world.jpg"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/e5vMv7FmT-hamleys.jpg"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/fVQAxoll6-harry-potter.png"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/_dXfmNYmb-marvel_logo.png"} alt="" /> */}
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
