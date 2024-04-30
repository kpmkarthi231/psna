import React from "react";

const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h1 style={styles.heading}>About PSNA MCA Department</h1>
        <p style={styles.paragraph}>
          Welcome to the About Us page of the MCA Department at PSNA College of
          Engineering and Technology. Our department is committed to providing
          quality education, fostering research and innovation, and preparing
          students for successful careers in the field of Computer Applications.
        </p>
        {/* Add more sections with relevant information */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  contentContainer: {
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333", // Darken the heading color
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
    color: "#666", // Adjust the paragraph color
  },
  // Add more styles as needed
};

export default SuccessPage;
