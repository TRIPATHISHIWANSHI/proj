import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css"; // Import CSS file

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div className="logo">
        <img src="https://sendonow.com/Images/Logo.png" alt="Sendo Logo" />
      </div>

      {/* Navigation Links with Dropdowns */}
      <div className="nav-links">
        {/* Vehicle Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("vehicle")}>Vehicle Management</button>
          {openDropdown === "vehicle" && (
            <div className="dropdown-menu">
              <Link to="/vehicle-management">Overview</Link>
              <Link to="/vehicle-onboarding">Onboarding</Link>
              <Link to="/live-fleet-tracking">Live Fleet Tracking</Link>
              <Link to="/oil-service">Oil Service</Link>
              <Link to="/spare-parts">Spare Parts</Link>
              <Link to="/vehicle-type">Vehicle Type</Link>
            </div>
          )}
        </div>

        {/* Driver Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("driver")}>Driver Management</button>
          {openDropdown === "driver" && (
            <div className="dropdown-menu">
              <Link to="/driver-management">Overview</Link>
              <Link to="/driver-onboarding">Onboarding</Link>
            </div>
          )}
        </div>

        {/* Expense Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("expense")}>Expense Management</button>
          {openDropdown === "expense" && (
            <div className="dropdown-menu">
              <Link to="/expenses-management">Overview</Link>
              <Link to="/vehicle-expenses">Vehicle Expenses</Link>
              <Link to="/others">Other Expenses</Link>
            </div>
          )}
        </div>

        {/* Vendor Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("vendor")}>Vendor Management</button>
          {openDropdown === "vendor" && (
            <div className="dropdown-menu">
              <Link to="/vendor-management">Overview</Link>
              <Link to="/vendor-onboarding">Onboarding</Link>
              <Link to="/advance">Advance</Link>
              <Link to="/deduction">Deductions</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/trip-sheet">Trip Sheet</Link>
            </div>
          )}
        </div>

        {/* Customer Management */}
        <div className="dropdown">
          <button onClick={() => toggleDropdown("customer")}>Customer Management</button>
          {openDropdown === "customer" && (
            <div className="dropdown-menu">
              <Link to="/customer-management">Overview</Link>
              <Link to="/agreement">Agreement</Link>
              <Link to="/gst-file">GST File</Link>
              <Link to="/invoice">Invoice</Link>
              <Link to="/mis">MIS</Link>
              <Link to="/customer-onboarding">Onboarding</Link>
              <Link to="/payment-status">Payment Status</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
