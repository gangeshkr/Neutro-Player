import React from "react";

const plans = [
  {
    name: "Standard",
    price: 99,
    features: [
      "Name, Logo Retained",
      "Background Theme Image Customization",
      "2 XMLTV Portals",
      "Free Proxy/DNS controller to change DNS anytime",
    ],
  },
  {
    name: "Pro",
    price: 299,
    features: [
      "Everything in Standard Plan Plus",
      "Hide Video integration option on app launch",
      "Unlimited XMLTV Portal addresses",
      "2 DNS+ Portals",
      "Future Update in 10 GB/day",
    ],
  },
  {
    name: "Pro Gold",
    price: 449,
    features: [
      "Everything in Gold Plan Plus",
      "Lifetime free app updates on each new version launch for one at all",
    ],
  },
];

const Plan = ({ onNext, onPrev }: any) => {
  return (
    <div className="App-SelectPlan">
      <div className="mt-2">
        <div className="row">
          <div className="col-8">
            <h3 className="home-title ultra-thick">Select Plan and pay it</h3>
            <p className="label">Please select any one plan and pay it</p>
          </div>
          <div className="col-4 d-flex justify-content-around">
            <button className="primary-btn">Lifetime</button>
            <button className="secondary-btn btn-outline-primary">
              Monthly
            </button>
          </div>
        </div>
        <div className="row mt-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div className="plan-card">
                <div>
                  <h4 className="plan-label">{plan.name}</h4>
                  <h2 className="plan-price">${plan.price}</h2>
                </div>
                <hr />
                <div className="d-flex flex-column justify-content-between">
                <div className="plan-content">
                    <ul className="mt-3">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="primary-btn" style={{ width: "100%" }}>
                    Get Started
                  </button>
                </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end gap-3 mt-4">
          <button
            className="secondary-btn"
            onClick={onPrev}
            style={{ width: "15%" }}
          >
            Back
          </button>
          <button
            className="primary-btn"
            onClick={onNext}
            style={{ width: "15%" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
