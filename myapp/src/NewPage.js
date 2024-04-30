import {
  BriefcaseBusiness,
  CircleUserRound,
  Facebook,
  Home,
  Instagram,
  MessageSquareMore,
  Twitter,
} from "lucide-react";
import React from "react";

const NewPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.footerLinks}>
        <a href="/" style={styles.link}>
          <Home color="white" size={20} />
          <span style={styles.linkText}>Home</span>
        </a>

        <a href="/successpage" style={styles.link}>
          <MessageSquareMore color="white" size={20} />
          <span style={styles.linkText}>About Us</span>
        </a>

        <a href="/myorders" style={styles.link}>
          <CircleUserRound color="white" size={20} />
          <span style={styles.linkText}>Contact</span>
        </a>

        <a href="/profile" style={styles.link}>
          <BriefcaseBusiness color="white" size={20} />
          <span style={styles.linkText}>PLACEMENT</span>
        </a>
      </div>

      <div style={styles.footerSocial}>
        <a href="https://www.facebook.com" style={styles.socialLink}>
          <Facebook color="white" size={20} />
          <span style={styles.socialLinkText}>Facebook</span>
        </a>

        <a href="https://www.twitter.com" style={styles.socialLink}>
          <Twitter color="white" size={20} />
          <span style={styles.socialLinkText}>Twitter</span>
        </a>

        <a href="https://www.instagram.com" style={styles.socialLink}>
          <Instagram color="white" size={20} />
          <span style={styles.socialLinkText}>Instagram</span>
        </a>
      </div>

      <p style={styles.copyright}>
        &copy; 2023 PSNA College App. All Rights Reserved.
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#333",
    padding: "20px",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
  },
  linkText: {
    color: "#fff",
    marginTop: "5px",
    fontSize: "12px",
    marginLeft: "5px",
  },
  footerSocial: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    margin: "0 15px",
    textDecoration: "none",
  },
  socialLinkText: {
    color: "#fff",
    marginTop: "5px",
    fontSize: "12px",
  },
  copyright: {
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
  },
};

export default NewPage;
