import React from "react";
import { latestpro2 } from "../assets/images";
import "../style/prodDetails.css";

export default function ProdDetails() {
  return (
    <>
      <div class="pgaddressrow">
        <h1 class="heading">My Account</h1>
        <h4 class="smheading">
          <a href="/home" style={{ textDecoration: "none" }}>
            Home
          </a>{" "}
          / Product Details {" "}
        </h4>
      </div>
      <div className="centered">
        <div class="container">
          <div class="card">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img src={latestpro2} alt={latestpro2} />
                    </div>
                    <div class="tab-pane" id="pic-2">
                      <img src={latestpro2} alt={latestpro2} />
                    </div>
                    <div class="tab-pane" id="pic-3">
                      <img src={latestpro2} alt={latestpro2} />
                    </div>
                    <div class="tab-pane" id="pic-4">
                      <img src={latestpro2} alt={latestpro2} />
                    </div>
                    <div class="tab-pane" id="pic-5">
                      <img src={latestpro2} alt={latestpro2} />
                    </div>
                  </div>
                  <ul class="preview-thumbnail nav nav-tabs">
                    <li class="active">
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src={latestpro2} alt={latestpro2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-2" data-toggle="tab">
                        <img src={latestpro2} alt={latestpro2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-3" data-toggle="tab">
                        <img src={latestpro2} alt={latestpro2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-4" data-toggle="tab">
                        <img src={latestpro2} alt={latestpro2} />
                      </a>
                    </li>
                    <li>
                      <a data-target="#pic-5" data-toggle="tab">
                        <img src={latestpro2} alt={latestpro2} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="details col-md-6">
                  <h3 class="product-title">Ceramic monster figurine</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <p class="product-description">
                    Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                    cubilia sem sem! Repudiandae et! Massa senectus enim minim
                    sociosqu delectus posuere.
                  </p>
                  <h4 class="price">
                    current price: <span>$180</span>
                  </h4>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <h5 class="sizes">
                    sizes:
                    <span class="size" data-toggle="tooltip" title="small">
                      S
                    </span>
                    <span class="size" data-toggle="tooltip" title="medium">
                      M
                    </span>
                    <span class="size" data-toggle="tooltip" title="large">
                      L
                    </span>
                    <span class="size" data-toggle="tooltip" title="xtra large">
                      XL
                    </span>
                  </h5>
                  <h5 class="colors">
                    Colors:
                    <span
                      class="color orange not-available"
                      data-toggle="tooltip"
                      title="Not In store"
                    ></span>
                    <span class="color green"></span>
                    <span class="color blue"></span>
                  </h5>
                  <div class="action">
                    <button class="action add-to-cart btn btn-warning" type="button">
                      add to cart
                    </button>
                    <button class="action like btn " type="button">
                      <span class="fa fa-heart"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
