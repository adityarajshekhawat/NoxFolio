import React from 'react'
import log1 from "../../../assets/page2/client-logo-two1.png";
import log2 from "../../../assets/page2/client-logo-two2.png";
import log3 from "../../../assets/page2/client-logo-two3.png";
import log4 from "../../../assets/page2/client-logo-two4.png";
import log5 from "../../../assets/page2/client-logo-two5.png";
const Client2 = () => {
  return (
    <>
      {" "}
      <div class="client-logo-area bgc-black rel z-1 pt-25 pb-60">
        <div class="container">
          <div class="client-logo-wrap style-two ">
            <img src={log1} alt="Client Logo" />
            <img src={log2} alt="Client Logo" />
            <img src={log3} alt="Client Logo" />
            <img src={log4} alt="Client Logo" />
            <img src={log5} alt="Client Logo" />
          </div>
        </div>
        <div class="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Client2