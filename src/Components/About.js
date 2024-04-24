import React from "react";
// import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import Lottie from "lottie-react";
import aboutus from "../Assets/aboutus.json"

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
      <Lottie loop={true} animationData={aboutus} />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to MEDcare, a dedicated team committed to enhancing patient care through technology.
          MEDcare empowers individuals with secure access to their medical records, ensuring privacy and convenience. 
          With a focus on user-centric solutions, we strive to simplify healthcare management, 
          providing peace of mind for patients and healthcare providers alike.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Empowering Patient Control"
          description="Secure access to records, simplified management, and real-time updates."
        />

        <SolutionStep
          title="Enhanced Collaboration"
          description="Seamless doctor-patient communication, compliance, and personalized experiences."
        />

        <SolutionStep
          title="Reliable Infrastructure"
          description="Robust security, scalable CLOUD integration, and continuous support for optimal performance."
        />
      </div>
    </div>
  );
}

export default About;
