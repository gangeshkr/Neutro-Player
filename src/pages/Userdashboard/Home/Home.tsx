import React, { useCallback, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Stepper from "../../../components/Stepper/Stepper";
import FileUpload from "../../../components/FileUpload/FileUpload";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  return (
    <div className="conatainer">
      <Sidebar/>
      <div className="main-content">
        <Stepper currentStep={currentStep}/>
        {/* Main form component */}
        <div className="home-layout">

          <div className="d-flex align-items-center gap-3">
            <h3 className="home-title ultra-thick">Master Sony App</h3>
            <i className="fas fa-pen"></i>
          </div>

          <div className="App-Logo">
          <div className="form-layout mt-2">
            <div className="row">
              <h3 className="home-title ultra-thick">Upload App Logo & etc</h3>
              <p className="label">Please enter below details and move ahead for process</p>
            </div>
            <div className="uplaod-preview-section row mt-4">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <h3 className="app-label ultra-thick mb-3">App Logo *</h3>
                <FileUpload onDrop={handleDrop}/>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <h3 className="app-label thick">Logo Preview Image</h3>

              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="primary-btn" type="submit" style={{ width: "15%" }} onClick={handleNext}>Next</button>
            </div>
          </div>
          </div>
          {/* App Video */}
          <div className="App-Video">
          <div className="form-layout mt-2">
            <div className="row">
              <h3 className="home-title ultra-thick">Upload App Video</h3>
              <p className="label">Please enter below details and move ahead for process</p>
            </div>
            <div className="uplaod-preview-section row mt-4">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <h3 className="app-label ultra-thick mb-3">App Logo *</h3>
                <FileUpload onDrop={handleDrop}/>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <h3 className="app-label thick">Logo Preview Image</h3>

              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button className="primary-btn" type="submit" style={{ width: "15%" }} onClick={handleNext}>Next</button>
            </div>
          </div>
          </div>
          {/* App Background */}
          <div className="App-Background">
          <div className="form-layout mt-2">
            <div className="row">
              <h3 className="home-title ultra-thick">Upload App Background Image</h3>
              <p className="label">Please enter below details and move ahead for process</p>
            </div>
            <div className="uplaod-preview-section row mt-4">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <h3 className="app-label ultra-thick mb-3">App Logo *</h3>
                <FileUpload onDrop={handleDrop}/>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <h3 className="app-label thick">Logo Preview Image</h3>

              </div>
            </div>

            <div className="d-flex justify-content-end gap-3">
              <button className="secondary-btn" type="submit" style={{ width: "15%" }} onClick={handlePrev}>Back</button>
              <button className="primary-btn" type="submit" style={{ width: "15%" }} onClick={handleNext}>Next</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
