import React from "react";
import { useState, useEffect } from "react";
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          ...styles.sidebar,
          ...(isSmallScreen ? styles.smallScreenSidebar : {}),
        }}
      >
        <h3 style={styles.header}>Dashboard</h3>
        <ul style={styles.list}>
          <li
            style={styles.listItem}
            onClick={() => alert("Navigating to Home")}
          >
            Home
          </li>
          <li
            style={styles.listItem}
            onClick={() => alert("Navigating to Reports")}
          >
            Reports
          </li>
        </ul>
        <h3 style={styles.header}>CRM</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Customer Management</li>
          <li style={styles.listItem}>Leads & Opportunities</li>
          <li style={styles.listItem}>Sales Tracking</li>
        </ul>
        <h3 style={styles.header}>Financial</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Invoice Generation</li>
          <li style={styles.listItem}>Payslip Management</li>
          <li style={styles.listItem}>Expense Tracking</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",

    height: "100vh", // Adjust height considering the header

    backgroundColor: "black",

    color: "white",

    position: "absolute",

    top: "60px", // Push the sidebar below the header

    left: "0",

    overflowY: "auto",

    padding: "20px",
    marginTop: "5rem",
  },
  smallScreenSidebar: {
    top: "60px", // Remove top margin
    marginTop: "60", // Remove any extra space
    height: "100vh", // Full height
  },
  header: {
    textAlign: "center",

    textTransform: "uppercase",

    backgroundColor: "yellow",

    color: "black",

    padding: "20px",

    marginBottom: "10px",
  },

  list: {
    listStyle: "none",

    padding: "0",
  },

  listItem: {
    color: "white", // Ensure text is visible
    padding: "10px",
    textDecoration: "none",
    display: "block",
  },
};

export default Sidebar;
