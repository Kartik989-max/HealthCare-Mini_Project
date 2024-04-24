import React, { useEffect, useState } from "react";
// import doc from "../Assets/doc.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import homeani from "../Assets/homeani.json"
import Lottie from "lottie-react";


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };
  const handleBookAppointmentClickDoctor = () => {
    navigate("/appointment");
  };
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
           Empowering Healthcare: Seamlessly manage medical records for a healthier future.
          </h2>
          <p className="text-descritpion">
          MEDcare offers secure and intuitive solutions for patients and doctors, 
          streamlining record management and enhancing collaboration. With advanced security and scalable infrastructure,
          we're shaping the future of healthcare delivery.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Register as Patient!
          </button>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClickDoctor}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Register As Doctor!
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1500+</p>
              <p>Registered Patients</p>
            </div>

            <div className="text-stats-container">
              <p>500+</p>
              <p>registered expert Doctors</p>
            </div>

          </div>
        </div>

        <div className="hero-image-section">
          <Lottie loop={true} animationData={homeani} />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
