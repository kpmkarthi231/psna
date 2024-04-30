import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <div style={styles.container}>
      <div style={styles.space}></div>
      <div style={styles.contactInfo}>
        <h1 style={styles.heading}>Contact Information</h1>
        <p style={styles.text}>PSNA College of Engineering and Technology</p>
        <p style={styles.text}>Address: [College Address]</p>
        <p style={styles.text}>Phone: [College Phone Number]</p>
        <p style={styles.text}>Email: info@psnacet.edu.in</p>
      </div>

      <div style={styles.contactForm}>
        {/* Include your contact form component here */}
        {/* You can use a library or create a custom form */}
      </div>

      <div></div>
      <div style={styles.space}></div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: "20px 20px 30px", // Added vertical padding of 20px and 30px at the bottom
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  space: {
    height: "20px", // Adjust the height as needed
  },
  contactInfo: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    marginBottom: "5px",
    lineHeight: "1.5",
    color: "#555",
  },
  contactForm: {
    marginBottom: "20px",
  },
  contactLink: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
};

export default MyOrders;
