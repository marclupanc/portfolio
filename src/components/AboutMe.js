import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/CV_Marc_Lupanciuc.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "CV_Marc_Lupanciuc.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    // <p style={{ color: "grey" }}>Stay tuned for updates!</p>
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Bine ai venit</h4>
            <h5>Sunt Frontend Developer</h5>

            <div className="contentDescription">
              <p>
                > Dezvoltare de site-uri web responsive: creez site-uri web care
                se adaptează și funcționează perfect pe diferite dispozitive și
                dimensiuni de ecran, asigurând o experiență optimă pentru
                utilizator.
              </p>
              <br></br>
              <p>
                > Dezvoltare React: Construiți aplicații web dinamice și
                interactive folosind biblioteca React JavaScript, creând
                componente reutilizabile și implementând managementul stării.
              </p>
              <br></br>
              <p>
                > Dezvoltare WordPress: creez site-uri web folosind WordPress,
                permițând clienților să gestioneze și să
                actualizeze cu ușurință conținutul site-ului web prin interfața
                WordPress.
              </p>
              <br></br>
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Nume:</span>
                  <p>Marc Lupanciuc</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Locația: </span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Disponibilitatea:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button
                className="btn downloadCV"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? "Se descarcă..." : "Descarcă CV"}
              </button>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
