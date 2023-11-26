import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";
import Social from "../iletisim/Social";
import TitHarita from "./Titanyum Harita.png";


import TopluHizmet from "../topluhizmet/TopluHizmet.js";

function Home() {
  return (
    <div>

      <div className="row m-2">
      <img src={TitHarita} className="" alt="Samsun Güzellik Merkezi" loading="lazy" title="Samsun Güzellik Merkezi"></img>

      </div>
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            marginTop: "1rem",
            color: "#e4a70f",
            fontFamily: "sans-serif",
          }}
        >
          Kampanyalarımız Devam Etmektedir
        </h2>
        <Klinik />
      </div>

      <hr />
      <div className="row">
        <TopluHizmet />
      </div>

      <hr />
      <div
        style={{ margin: "auto", display: "block", justifyContent: "center" }}
      >
        <Social />
      </div>
      <hr />
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            color: "#e4a70f",
            fontFamily: "sans-serif",
          }}
        >
          Hizmetlerimiz
        </h2>
        <Owl />
      </div>
      <hr />

      <div className="row m-2">
        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          style={{ marginTop: "2.5rem" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886.2530205135295!2d36.33326837229849!3d41.291129980031684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877b8eeb8aa0b%3A0x91099c41e21ddd5!2sMecit%20Turan%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1700992134152!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #e4a70f solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe>
        </div>

        <div
          className="col-lg-6 col-md-6 col-sm-6 col-12"
          style={{ marginTop: "2.5rem" }}
        >
          <NedenBercislina />
        </div>
      </div>
    </div>
  );
}

export default Home;
