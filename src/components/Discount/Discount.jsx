import React from "react";
import "./page.scss";
import Image from "next/image";
import image from "../../assets/imag1.png";
function Discount() {
  return (
    <section>
      <div className="container">
        <div className="discount">
          <div className=" discountBox">
            <h1>GET 50%</h1>
            <label>
              Enter Your Email Address
              <input type="text" />
              <button>Submit</button>
            </label>
            <Image className="discount_img mb-50" src={image} alt="discount" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
