import React from "react";

const AddressPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>College Address</h1>
      <div style={styles.addressContainer}>
        <p style={styles.address}>
          PSNA College of Engineering and Technology
          <br />
          Kothandaraman Nagar,
          <br />
          Dindigul - 624622,
          <br />
          Tamil Nadu, India
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  addressContainer: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  },
  address: {
    fontSize: "16px",
    lineHeight: "1.5",
    textAlign: "center",
  },
};

export default AddressPage;
