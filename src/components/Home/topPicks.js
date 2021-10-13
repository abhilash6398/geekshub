import React, { Component } from "react";
import { Banimg } from "../../assets/images";
import axios from "./Axios";
// import "../style/topPicks.css";
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
        const Data = res.data;
        console.log(Data);
        const topPicks = Data.data.map((u) => (
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
                        {/* <img src={u.productDetail.image.img} alt="" style={{padding:"20px"}} /> */}
                        <img
                          src={
                            "http://3.109.247.241/node-team-B/geekshub/uploads/nMbG2G2M9-latestpro2.png"
                          }
                          alt=""
                          style={{
                            padding: "20px",
                            height: "500px",
                            width: "300px",
                          }}
                        />
                        {/* <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/FJiz321B8-pro4.jpg"} alt="" />
                        <img src={"http://3.109.247.241/node-team-B/geekshub/uploads/NxJdpeWKo-latestpro4.png"} alt="" style={{padding:"20px"}}  /> */}
                      </div>
                      <div class="proinfo" style={{ textAlign: "left" }}>
                        <div class="pronm">{u.count}</div>
                        <div class="pronm">{u.productDetail.brand}</div>
                        <div class="pronm">{u.productDetail.slug}</div>
                        <div class="pronm">{u.productDetail.name}</div>
                        <div class="pronm">{u.productDetail.price}</div>
                        <div class="pronm">{u.productDetail.category}</div>
                        <div class="pronm">
                          {u.productDetail.description.materials}
                        </div>
                        <div class="pronm">
                          {u.productDetail.description.colors}
                        </div>
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
    return (
      <>
        <div className="container">
          {/* {this.state.topPicks.map(function(x){
          return <li key={x._id}> {x.data.productDetail.image.img} as the {x.data.productDetail.name} </li>
        })}
        {/* <h3>Items for Sale</h3>{this.state.TopPicks.map(function(topPicks){
          return <li key={TopPicks._id}> {topPicks.data.productDetail.image.img} as the {topPicks.data.productDetail.name} </li>
        })} */}
          {this.state.topPicks}
        </div>
      </>
    );
  }
}
