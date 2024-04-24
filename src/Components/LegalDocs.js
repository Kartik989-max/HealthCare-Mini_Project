import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          MEDcare <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to our Healthcare Management Platform! (MEDcare) Simplify your medical record management with secure 
        access for patients and doctors. Designed for efficiency and peace of mind, MEDcare ensures confidentiality
        and collaboration. Join us in shaping the future of healthcare delivery
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          We prioritize the confidentiality of your medical records. 
          Your data is securely stored and accessed only with your consent. 
          We adhere to industry regulations such as HIPAA to safeguard your privacy. 
          
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By using MEDcare, you agree to securely manage your medical records.
        Access is granted with responsibility, ensuring compliance with healthcare regulations.
        We're committed to delivering a seamless and secure healthcare experience 
          for all users. For further information, please reach out to us.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Need assistance navigating our platform? Our team is here to help! Whether you're a patient seeking guidance 
        on accessing your records or a doctor needing support with record management, we offer personalized consultations 
        to ensure your experience is seamless and successful. Contact us today for expert assistance.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Discover Seamless Healthcare: Patients upload securely, 
        doctors access with ease. Streamline record management for enhanced collaboration and care.
        Experience the future of medical records, empowering patients and providers alike. 
        Join us in revolutionizing healthcare delivery
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 MEDcare+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
