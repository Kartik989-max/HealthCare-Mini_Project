import React from "react";
// import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import whychoose from "../Assets/whychoose.json"
import Lottie from "lottie-react";


function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
      <Lottie loop={true} animationData={whychoose} />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose MEDcare </span>
        </h3>
        <p className="ba-description">
        1. Secure & Seamless: Safeguard your medical records with robust security measures.</p>
        <p className="ba-description">
        2. User-Friendly: Intuitive platform for easy record management, accessible anytime, anywhere.</p>
        <p className="ba-description">
        3. Expert Support: Dedicated team ensures personalized assistance and smooth experience. Experience peace of mind and efficiency with us.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> UID
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> SECURE
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 accessible
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Enrollment Easy and Quick
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Register now
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
