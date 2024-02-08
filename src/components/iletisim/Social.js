import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";

function Iletisim() {
  useDocumentTitle("Samsun Lazer Epilasyon - Samsun Titanyum Beauty Salonu ");
  return (
    <div className="row">
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://maps.app.goo.gl/dbmQRL9PAxF3yENF6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i1} className="contactIcons" title="Adres için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
          <span style={{color:"#e4a70f"}}><b>Adres:</b></span><br/>
          Kale Mah. Kaptanağa Sok. No:14/5 Mecit Turan İş Merkezi Kat:1  Samsun Cumhuriyet Meydanı  <br/> <b>İlkadım / Samsun</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="tel: +905011481755"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#e4a70f"}}><b>Rezervasyon:</b></span><br/>
          <b>0501 148 17 55</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <img src={i3} className="contactIcons" title="Çalışma Saatleri"></img>
        <p className="contactText">
         <span style={{color:"#e4a70f"}}><b>Çalışma Saatleri:</b></span><br/>
          Her Gün: 09:30 – 19:30
          Pazar Günü: Kapalı
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905011481755" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#e4a70f"}}><b>WhatsApp:</b></span><br/>
          <b>0501 148 17 55</b>
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/titanyum.beauty.samsun/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#e4a70f"}}><b>Instagram:</b></span><br/>
          @titanyum.beauty.samsun
        </p>
      </div>
      <div class="col-lg-2s col-md-2 col-sm-12 col-12 p-5">
        <a
          href="https://www.facebook.com/titanyum.beauty.samsun"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook için İkona Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#e4a70f"}}><b>Facebook:</b></span><br/>
          @titanyum.beauty.samsun
        </p>
      </div>
    </div>
  );
}

export default Iletisim;
