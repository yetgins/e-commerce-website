import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>ShipShop Cares</li>
            <li>Gift a smile</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on ShipShop</li>
            <li>Sell under ShipShop</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by ShipShop</li>
            <li>ShipShop Pay</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>COVID-19 and ShipShop</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>ShipShop App Download</li>
            <li>ShipShop Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"
          src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t31.0-8/14707935_1788829271388556_232388326914306008_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4PMERTtBB-4AX9M1taw&_nc_ht=scontent.fsaw2-1.fna&oh=5201bc0bc2ea6a88867d9c4916ca60e3&oe=5FFD8D19"
          //src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="Footer__Line-message">
          ShipShop developed by &copy;{" "}
          <a href="https://github.com/yetgins" target="_blank">
            YETGINS
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;