import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Stepper from "../../../components/Stepper/Stepper";
import XuiProject from "../XuiProject/XuiProject";
import AppLogo from "./AppLogo/AppLogo";
import Plan from "../plan/Plan";
import RequestApp from "../requestApp/RequestApp";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <AppLogo onNext={handleNext} />;
      case 1:
        return <XuiProject onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <Plan onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <RequestApp onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return (
    <div className="conatainer">
      <Sidebar />
      <div className="main-content">
        <Stepper currentStep={currentStep} />
        <div className="home-layout">
          {
            currentStep < 2 &&           
            <div className="d-flex align-items-center gap-3">
            <h3 className="home-title ultra-thick">Master Sony App</h3>
            <i className="fas fa-pen"></i>
          </div>
          }
          {renderStepComponent()}
        </div>
      </div>
    </div>
  );
};

export default Home;