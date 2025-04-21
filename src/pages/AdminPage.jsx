import React from "react";

const AdminPage = () => {
  return (
    <div style={styles.container}>
      <h2>Admin Panel</h2>
      <p>This is where admin can view and process print orders.</p>
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

export default AdminPage;
