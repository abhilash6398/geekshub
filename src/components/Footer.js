import React from "react";
import { AppleStore, GooglePlay } from "../assets/images";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
export default function FooterComponent() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-light text-muted">
        <br />

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Online Shopping </h6>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineHeight:"0.5px" }}
                  >
                    Men
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineHeight:"0.5px" }}
                  >
                    Women
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineHeight:"normal" }}
                  >
                    Kids
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Home & Living
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Gift Cards
                  </a>
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful Links </h6>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Contact Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    FAQ
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    T&C
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Track Orders
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Shipping
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Cancellation
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-reset"
                    style={{ textDecoration: "none", lineSpacing: "2px" }}
                  >
                    Returns
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">App on Mobile</h6>
                <div class="downLinkContainer">
                  <a href="# ">
                    <img
                      class="androidDownLink"
                      src={GooglePlay}
                      alt=""
                      style={{ height: "65px", width: "200px", padding: "5px" }}
                    />
                  </a>
                  <br />
                  <a href="# ">
                    <img
                      class="iOSDownLink"
                      src={AppleStore}
                      alt=""
                      style={{ height: "65px", width: "200px", padding: "5px" }}
                    />
                  </a>
                </div>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <div class="wakipromises">
                  <div class="promisesbx">
                    <div class="imgsbx">
                      <span class="original"></span>
                    </div>
                    <div class="promisecon">
                      <strong>100% ORIGINAL</strong> guarantee for all products at
                      Geekshub
                    </div>
                  </div>
                  <br/>
                  <div class="promisesbx">
                    <div class="imgsbx">
                      <span class="return"></span>
                    </div>
                    <div class="promisecon">
                      <strong>Return within 30 days</strong> of receiving your order{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
          <hr style={{color: "#feb600" , height:"10px"}} />
        </section>
        {/* <!-- Section: Links  --> */}
      </footer>
      {/* <!-- Footer --> */}
      <br/>
    </>
  );
}
