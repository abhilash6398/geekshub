import React, { Component } from "react";
import axios from "./Axios";
// import "../style/banner.css";
// import "../assets/css/style.css";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Banner: [],
    };
  }
  getBannersData() {
    axios
      .get(`posterPage`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const banners = data.data.map((u) => (
          <div className="container">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                <div class="titleview">
                  {/* <span>posterPage</span> */}
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
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/70dZbhZN4-banimg.jpg"} alt="" style={{height:"500px",width:"1000px"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          banners,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getBannersData();
  }
  render() {
    return <>{this.state.banners}</>;
  }
}