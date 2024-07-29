import React, { useCallback, useState } from "react";
import FileUpload from "../../../../components/FileUpload/FileUpload";

const AppLogo = ({ onNext }:any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentForm, setCurrentForm] = useState('logo');
  const [formData, setFormData] = useState({
    logo: null,
    video: null,
    background: null
  });

  const handleNext = () => {
    if (currentStep === 0) {
      if (currentForm === 'logo') {
        setCurrentForm('video');
      } else if (currentForm === 'video') {
        setCurrentForm('background');
      } else if (currentForm === 'background') {
        setCurrentStep(1);
        setCurrentForm('logo');
        onNext()
      }
    } else {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    }
  };

  const handlePrev = () => {
    if (currentStep === 0) {
      if (currentForm === 'background') {
        setCurrentForm('video');
      } else if (currentForm === 'video') {
        setCurrentForm('logo');
      }
    } else {
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    }
  };
  
  const handleDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFormData(prevData => ({
      ...prevData,
      [currentForm]: acceptedFiles[0]
    }));
  }, [currentForm]);

  const renderForm = () => {
    let title, label;
    switch(currentForm) {
      case 'logo':
        title = "Upload App Logo & etc";
        label = "App Logo *";
        break;
      case 'video':
        title = "Upload App Video";
        label = "App Video *";
        break;
      case 'background':
        title = "Upload App Background Image";
        label = "App Background *";
        break;
      default:
        return null;
    }

    return (
      <div className={`App-${currentForm}`}>
        {/* <div className="form-layout mt-2"> */}
          <div className="row">
            <h3 className="home-title ultra-thick">{title}</h3>
            <p className="label">Please enter below details and move ahead for process</p>
          </div>
          <div className="uplaod-preview-section row mt-4">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <h3 className="app-label ultra-thick mb-3">{label}</h3>
              <FileUpload onDrop={handleDrop} />
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
              <h3 className="app-label thick">Preview Image</h3>
              {formData[currentForm] && <p>{currentForm} uploaded: {formData[currentForm]}</p>}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            {(currentStep > 0 || currentForm !== 'logo') && (
              <button className="secondary-btn" onClick={handlePrev} style={{ width: "15%" }}>
                Back
              </button>
            )}
            <button className="primary-btn" onClick={handleNext} style={{ width: "15%" }}>
              Next
            </button>
          </div>
        </div>
      // </div>
    );
  };

  return (
    <div className="App-Upload">
      <div className="form-layout mt-2">
        {/* <h3 className="home-title ultra-thick">Upload App Logo & etc</h3>
        <p className="label">Please enter below details and move ahead for process</p>
        <div className="upload-preview-section row mt-4">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <h3 className="app-label ultra-thick mb-3">App Logo *</h3>
            <FileUpload onDrop={handleDrop} />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
            <h3 className="app-label thick">Logo Preview Image</h3>
            
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button className="primary-btn" onClick={onNext} style={{ width: "15%" }}>
            Next
          </button>
        </div> */}
        {currentStep === 0 ? renderForm() : ''}
      </div>
    </div>
  );
};

export default AppLogo;