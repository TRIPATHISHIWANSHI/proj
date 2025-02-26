import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css"; // Import CSS file
import Confirmation from "./driver-application/CustomerManagement/CustomerConfirmation";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";


const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Keep sidebar open on larger screens
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };



  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false); // Optional: Close mobile menu as well
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <>
    <nav className="nav-bar">
      {/* Logo */}
      <div className="logo" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
          <img src="https://sendonow.com/Images/Logo.png" alt="Sendo Logo" />
        </div>
      {/* Hamburger Menu Button */}
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Navigation Links with Dropdowns */}
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Vehicle Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("vehicle")}>Vehicle Management</button>
          {openDropdown === "vehicle" && (
            <div className="dropdown-menu">
              <Link to="/vehicle-management" onClick={handleDropdownItemClick}>Overview</Link>
              <Link to="/vehicle-onboarding"onClick={handleDropdownItemClick}>Onboarding</Link>
              <Link to="/live-fleet-tracking"onClick={handleDropdownItemClick}>Live Fleet Tracking</Link>
              <Link to="/oil-service"onClick={handleDropdownItemClick}>Oil Service</Link>
              <Link to="/spare-parts"onClick={handleDropdownItemClick}>Spare Parts</Link>
              <Link to="/vehicle-type"onClick={handleDropdownItemClick}>Vehicle Tyre</Link>
            </div>
          )}
        </div>

        {/* Driver Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("driver")}>Driver Management</button>
          {openDropdown === "driver" && (
            <div className="dropdown-menu">
              <Link to="/driver-management" onClick={handleDropdownItemClick}>Overview</Link>
              <Link to="/driver-onboarding" onClick={handleDropdownItemClick}>Onboarding</Link>
            </div>
          )}
        </div>

        {/* Expense Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("expense")}>Expense Management</button>
          {openDropdown === "expense" && (
            <div className="dropdown-menu">
              <Link to="/expenses-management" onClick={handleDropdownItemClick}>Overview</Link>
              <Link to="/vehicle-expenses"onClick={handleDropdownItemClick}>Vehicle Expenses</Link>
              <Link to="/others" onClick={handleDropdownItemClick}>Other Expenses</Link>
            </div>
          )}
        </div>

        {/* Vendor Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("vendor")}>Vendor Management</button>
          {openDropdown === "vendor" && (
            <div className="dropdown-menu">
              <Link to="/vendor-management" onClick={handleDropdownItemClick}>Overview</Link>
              <Link to="/vendor-onboarding" onClick={handleDropdownItemClick}>Onboarding</Link>
              <Link to="/advance" onClick={handleDropdownItemClick}>Advance</Link>
              <Link to="/deduction" onClick={handleDropdownItemClick}>Deductions</Link>
              <Link to="/payment" onClick={handleDropdownItemClick}>Payment</Link>
              <Link to="/trip-sheet" onClick={handleDropdownItemClick}>Trip Sheet</Link>
            </div>
          )}
        </div>

        {/* Customer Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("customer")}>Customer Management</button>
          {openDropdown === "customer" && (
            <div className="dropdown-menu">
              <Link to="/customer-management" onClick={handleDropdownItemClick}>Overview</Link>
              <Link to="/agreement" onClick={handleDropdownItemClick}>Agreement</Link>
              <Link to="/gst-file" onClick={handleDropdownItemClick}>GST File</Link>
              <Link to="/invoice"onClick={handleDropdownItemClick}>Invoice</Link>
              <Link to="/mis"onClick={handleDropdownItemClick}>MIS</Link>
              <Link to="/customer-onboarding"onClick={handleDropdownItemClick}>Onboarding</Link>
              <Link to="/payment-status"onClick={handleDropdownItemClick}>Payment Status</Link>
              
            </div>
          )}
        </div>
      </div>
    </nav>
    {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </>
  );
};

export default Navbar;
