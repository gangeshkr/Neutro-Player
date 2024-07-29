import React from "react";
import tick from '../../../assets/image/Group 167.svg'

const RequestApp = ({ onPrev }:any) => {

  const eligible = [
    "Free Background image Customization",
    "Free intro video integration",
    "Free intro video integration",
    "Possible to Upgrade the Logo later",
    "Eligible for Future App updates"
  ]
  return (
    <div className="App-RequestApp">
      <div className="row">
        <div className="d-flex justify-content-center">
          <img src={tick} style={{height:'120px', width:'120px'}}/>
        </div>
      </div>
      <div className="row mt-5">
          <h2 className="headers text-center"><span className="primary-color">Congratulations!</span> Your Order Confirmed !</h2>
      </div>

      <h5 className="label-color text-center">Your order id is #12345652124442</h5>
      <h5 className="request-app text-center"><span className="label-color">But wait, why do you want to stop here without </span>FUTURE APP UPDATES?<span className="label-color"> and miss many features like</span></h5>
      <div className="row d-flex">
      {eligible.map((data, i) => (
        <div key={i} className="d-flex">
          <p  className="request-app-card small-para">
            {i+1}. {data}
            </p>
          </div>
                      ))}
      </div>
    </div>
  );
};

export default RequestApp;