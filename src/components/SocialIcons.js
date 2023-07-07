const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} target="_blank" href="https://github.com/marclupanc">
        <i className="fa-brands fa-github" aria-hidden="true" title="Marc Lupanciuc GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank" href="https://www.linkedin.com/in/marc-lupanciuc-7424b5113/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Marc Lupanciuc LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank" href="https://www.instagram.com/marclupanciuc/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Marc Lupanciuc Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank" href="https://www.facebook.com/mlupanciuc/">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Marc Lupanciuc Facebook Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
