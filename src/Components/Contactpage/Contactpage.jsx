import React from "react";
import "./Contactpage.css";
import star from "../../assets/images/Star-3.svg";
import pic from "../../assets/images/vaibhavpic.jpeg";
import eye from "../../assets/images/Eye2.svg";

function Contactpage() {
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={star} alt="svg" className="allsvg star2" />
        <img src={eye} alt="svg" className="allsvg eye2" />
      </div>
      <div className="contact-container flex" id="contact">
        <div className="form-container">
          <div className="contacthead">
            <span style={{ fontWeight: "lighter" }}>Let's</span> <b>connect</b>
          </div>
          <form className="form flex">
            <div className="input-field">
              <label htmlFor="username">Full name</label>
              <input type="text" name="username" />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="wrapbtn">
              <input type="submit" value="Submit" className="sub-btn" />
            </div>
          </form>
        </div>
        <div className="picmail">
          <div className="pic-container flex">
            <img src={pic} alt="vaibhav" className="picture" />
          </div>
          <div className="mail">vaibhavkumar54321@gmail.com</div>
        </div>
      </div>
      <div className="footer">Thankyou</div>
    </div>
  );
}

export default Contactpage;
