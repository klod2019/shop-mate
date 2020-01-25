import React from "react";
import fb from "../images/socialmedia/fb.png";
import ig from "../images/socialmedia/ig.png";
import pin from "../images/socialmedia/pin.png";
import twitter from "../images/socialmedia/twitter.png";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer-primary">
          <div className="optionsfooter">
            {" "}
            <p className="catfot">Women</p> <p className="catfot">Men</p>
            <p className="catfot">Kids </p>
            <p className="catfot">Shoes</p>
            <p className="catfot"> Brands </p>
          </div>
          <div className="socialmedias">
            <a href="https://www.facebook.com">
              {" "}
              <img src={fb} className="fb"></img>
            </a>
            <a href="https://www.instagram.com">
              {" "}
              <img src={ig} className="ig"></img>
            </a>
            <a href="https://www.pinterest.com">
              {" "}
              <img src={pin} className="pin"></img>
            </a>
            <a href="https://www.twitter.com">
              {" "}
              <img src={twitter} className="twitter"></img>
            </a>
          </div>
          <div className="lowertext">
            {" "}
            <p>2016 shopmate Ltd • </p> <p className="contact">Contact • </p>
            <p className="privacypolicy"> privacy policy </p>
          </div>
        </div>
      </>
    );
  }
}
