import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [companiesData, setCompaniesData] = useState([]);

  useEffect(() => {
    setIsLoad(true);
    getPlacementDetails();
  }, []);

  const getPlacementDetails = async () => {
    try {
      const res = await axios.get(
        "https://psna-13ca5-default-rtdb.firebaseio.com/companiesData.json"
      );
      setCompaniesData(res?.data || []);
      setIsLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCompanyItem = (company) => (
    <div key={company.id} style={styles.companyItem}>
      <div style={styles.logoContainer}>
        <img src={company.logo} alt={company.name} style={styles.companyLogo} />
      </div>
      <div>
        <h3 style={styles.companyName}>{company.name}</h3>
        <div style={styles.peopleContainer}>
          <p style={styles.label}>Peoples:</p>
          <ul style={styles.peopleList}>
            {company.students.map((student) => (
              <li key={student.id} style={styles.studentItem}>
                <img
                  src={student.image}
                  alt={student.name}
                  style={styles.studentImage}
                />
                <p style={styles.studentName}>{student.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {isLoad ? (
        <div style={styles.loading}>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1 style={styles.heading}>Placement Details</h1>
          <div>
            {companiesData.map((company) => renderCompanyItem(company))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "16px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    paddingTop: "5px",
    marginLeft: "15px",
    color: "#333",
  },
  companyItem: {
    marginBottom: "32px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: "16px",
  },
  companyLogo: {
    width: "100px",
    height: "100px",
    marginBottom: "8px",
    // borderRadius: "30%",
  },
  companyName: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#004080",
    marginBottom: "16px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#666",
    marginBottom: "8px",
  },
  peopleContainer: {
    flex: 1,
  },
  peopleList: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  studentItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    marginRight: "20px", // Adjust spacing between people
    width: "30%", // Show three people in a row
  },
  studentImage: {
    width: "50px",
    height: "50px",
    marginRight: "8px",
    borderRadius: "50%",
  },
  studentName: {
    fontSize: "14px",
    color: "#333",
  },
};

export default Profile;
