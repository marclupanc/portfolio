import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.svg";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };
  console.log('Commit test ');
  return (
    <section className="landing" style={styles.landing}>
      <Draw />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          Salut, sunt {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("Front End Developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString('Stack-ul de tehnologii:')
                .pauseFor(1000)
                .deleteAll()
                .typeString("Javascript. ")
                .pauseFor(500)
                .typeString("React. ")
                .pauseFor(500)
                .typeString("Typescript. ")
                .pauseFor(500)
                .typeString("Redux. ")
                .pauseFor(500)
                .typeString("NextJs. ")
                  .pauseFor(500)
                  .typeString("Node + Express. ")
                  .pauseFor(500)
                  .typeString("Wordpress ")
                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Marc Lupanciuc"
        />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
