import React, { useState } from "react";

const XuiProject = ({ onNext, onPrev }: any) => {
  const [portalAddress, setPortalAddress] = useState("");
  const [oldPortals, setOldPortals] = useState([
    "https://myportal.com/",
    "https://myportal.com/",
    "https://myportal.com/",
  ]);

  return (
    <div className="App-XCXUI">
      <div className="form-layout mt-2">
        <h3 className="home-title ultra-thick">Add XC/XUI</h3>
        <p className="label">
          Please enter below details and move ahead for process
        </p>
        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <h6 className="app-label ultra-thick">Portal Address</h6>
            <h6 className="app-label ultra-thick">Max allowed: 1</h6>
          </div>
          <input
            className="custom-form-input1"
            type="text"
            value={portalAddress}
            onChange={(e) => setPortalAddress(e.target.value)}
            placeholder="https://myportal.com/"
          />
        </div>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button
            className="primary-btn"
            onClick={onNext}
            style={{ width: "15%" }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-4">
          <h6 className="app-label ultra-thick">Old Portal</h6>
          {oldPortals.map((portal, index) => (
        <div key={index} className="row d-flex justify-content-between align-items-center">
        <input
          className="custom-form-input1 g-3"
          type="text"
          value={portal ? portal : ''}
          onChange={(e) => setPortalAddress(e.target.value)}
          placeholder="https://myportal.com/"
          readOnly
        />
        <div className="d-flex gap-4 portal-icons mt-3">
        <i className="fas fa-pen edit-icon" style={{color:'#008EFF'}} ></i>
        <i className="fas fa-trash delete-icon" style={{color:'#DB2424'}}></i>
          </div>
      </div>
          ))}
        </div>
    </div>
  );
};

export default XuiProject;
