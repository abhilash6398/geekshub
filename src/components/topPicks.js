import React, { Component } from "react";
import axios from "./Axios";
import "../style/topPicks.css";
// import "../assets/css/style.css";

export default class TopPicks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TopPicks: [],
    };
  }
  getTopPicksData() {
    axios
      .get(`topPicksPage`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const topPicks = data.data.map((u) => (
          <div className="container">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                <div class="titleview">
                  <span>TopPicks Page</span>
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
                        <img src={u.productDetail.image.img} alt="" />
                      </div>
                      <div class="proinfo">
                        <div class="pronm">{u.count}</div>
                        <div class="pronm">{u.productDetail.brand}</div>
                        <div class="pronm">{u.productDetail.slug}</div>
                        <div class="pronm">{u.productDetail.name}</div>
                        <div class="pronm">{u.productDetail.price}</div>
                        <div class="pronm">{u.productDetail.category}</div>
                        <div class="pronm">{u.productDetail.description.materials}</div>
                        <div class="pronm">{u.productDetail.description.colors}</div>


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
          topPicks,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getTopPicksData();
  }
  render() {
    return <>{this.state.topPicks}</>;
  }
}
