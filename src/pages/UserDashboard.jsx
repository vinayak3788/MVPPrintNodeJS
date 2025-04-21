import React from "react";

const UserDashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to MVPS Printing Dashboard</h2>
      <p>This is where users will upload files and place orders.</p>
    </div>
  );
};

const styles = {
  container: {
    margin: "100px auto",
    width: "600px",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
};

export default UserDashboard;
