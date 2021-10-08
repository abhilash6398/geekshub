import React, { Component } from "react";
import axios from "./Axios";
// import "../style/category.css";
// import "../assets/css/style.css";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }
  getcategoryData() {
    axios
      .get(`categoryPage`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const category = data.data.map((u) => (
          <div className="container">
            <div class="shopbyintrest">
              <div class="titleviewrow">
                <div class="titleview">
                  <span>categoryPage</span>
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
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/Quy4lNtQ4-shop_interst2.jpg"} alt="" />
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
          category,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getcategoryData();
  }
  render() {
    return <>{this.state.category}</>;
  }
}
