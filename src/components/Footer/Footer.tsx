import React from "react";

const Footer = () => {
  return (
    <footer className="footer shadow py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <p className="text-center text-lg-start mb-0">
              © 2024 All Rights Reserved by Rebranded Neutro Player APK
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul className="list-inline d-flex flex-wrap justify-content-center justify-content-lg-end mb-0">
              <li className="list-inline-item me-3 mb-2">
                <a href="#" className="text-decoration-none">Cookies Policy</a>
              </li>
              <li className="list-inline-item me-3 mb-2">
                <a href="#" className="text-decoration-none">Terms and Conditions</a>
              </li>
              <li className="list-inline-item me-3 mb-2">
                <a href="#" className="text-decoration-none">Refund Policy</a>
              </li>
              <li className="list-inline-item mb-2">
                <a href="#" className="text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;