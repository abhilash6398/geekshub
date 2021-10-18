import React from "react";
import { logo } from "../assets/images";
import FooterComponent from "./Footer";

const Aboutus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="pgaddressrow">
          <h1 className="heading">About Us </h1>
          <h4 className="smheading">
            <a href="/home" style={{ textDecoration: "none" }}>
              Home
            </a>{" "}
            / About Us
          </h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={logo}
                alt="Geekshub-Logo"
                style={{
                  marginLeft: "250px",
                  marginTop: "75px",
                  border: "1px",
                }}
              />
            </div>
            <div className="col-sm-6">
              <br />
              <h2>Welcome to Geekshub</h2>
              <p>
                is slechts een proeftekst uit het drukkerij- en zetterijwezen.
                Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds
                de 16e eeuw, toen een onbekende drukker een zethaak met letters
                nam en ze door elkaar husselde om een font-catalogus te maken.
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </p>
            </div>
            <div className="col-sm-12">
              <br />
              <p>
                is slechts een proeftekst uit het drukkerij- en zetterijwezen.
                Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds
                de 16e eeuw, toen een onbekende drukker een zethaak met letters
                nam en ze door elkaar husselde om een font-catalogus te maken.
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </p>
            </div>
            <div className="col-sm-12">
              <br />
              <p>
                is slechts een proeftekst uit het drukkerij- en zetterijwezen.
                Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds
                de 16e eeuw, toen een onbekende drukker een zethaak met letters
                nam en ze door elkaar husselde om een font-catalogus te maken.
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <FooterComponent/>
    </>

  );
};

export default Aboutus;
