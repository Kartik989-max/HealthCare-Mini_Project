import React from "react";
import InformationCard from "./InformationCard";
import {faStethoscope, faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";


import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        MEDcare simplifies medical record management, 
        allowing patients to securely upload, access, and manage their health reports.
        Doctors can easily retrieve patient records with permission, ensuring efficient healthcare delivery. 
        With robust security measures and seamless user experience, 
        our project empowers individuals to take control of their health information.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="UID"
          description="MEDcare assigns a unique identifier (UID) to each user upon registration, 
          ensuring secure access to their medical records. 
          This UID streamlines record retrieval for patients and facilitates authorized access for healthcare providers, 
          enhancing efficiency and confidentiality in healthcare management."
          icon={faUser}
        />

        <InformationCard
          title="Doctors END"
          description="MEDcare empowers doctors with secure access to patient records via a unique identifier (UID),
           facilitating efficient healthcare delivery. Additionally, doctors can add notes or comments to reports for future reference, 
          ensuring comprehensive and personalized patient care while maintaining confidentiality and compliance with healthcare standards."
          icon={faStethoscope}
        />

        <InformationCard
          title="Data Security and Compliance"
          description="Ensuring the highest standards of data security and compliance is paramount in healthcare.
           MEDcare employs advanced encryption techniques and strict access controls to safeguard patient information. 
           By adhering to industry regulations such as HIPAA, we prioritize the confidentiality and integrity of medical records, 
           fostering trust and peace of mind among patients and healthcare providers alike."
          icon={faUnlockAlt}
        />
      </div>
    </div>
  );
}

export default Info;
