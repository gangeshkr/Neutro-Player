import React from 'react';

const steps = [
  { title: "Upload File", status: "In Progress" },
  { title: "Add XC/XUI Portals", status: "Pending" },
  { title: "Select Plan", status: "Pending" },
  { title: "Request App", status: "Pending" },
];

const Stepper = ({ currentStep }:any) => {
  return (
    <div className="stepper-container">
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            {/* <div className='circle1'> */}
              <div className={`circle ${currentStep > index ? 'active' : currentStep === index ? 'current' : ''}`}>
                {currentStep > index ? '✓' : currentStep === index ? '' : ''}
              </div>
            {/* </div> */}
            <div className='d-flex flex-column align-items-baseline'>
              <div className='step-no'>Step {index + 1}</div>
              <div className="step-title ultra-thick mt-2">{step.title}</div>
              <div className="step-status mt-2">{step.status}</div>
            </div>
          </div>
        ))}
        <div className="progress-bar">
          <div
            className="indicator"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
