import React, { useState } from "react";  
import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";

const CustomerOnboarding = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    pointOfContact: "",
    state: "",
    phoneNumber: "",
    emailId: "",
    gstNumber: "",
    rateCard: "",
  });

  const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyleFlex={
    display: "flex",
    justifyContent: "space-between",
    gap:"2rem"

  }
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "normal",
  };

  const inputStyle = {
    boxSizing: "border-box",
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleClear = () => {
    setFormData({
      companyName: "",
      address: "",
      pointOfContact: "",
      state: "",
      phoneNumber: "",
      emailId: "",
      gstNumber: "",
      rateCard: "",
    });
  };
  
  // Form Validation
  const validateForm = () => {
    const alphaNumericRegex = /^[a-zA-Z0-9 ]+$/;
    const alphabetRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Validates a 10-digit number

    if (!alphaNumericRegex.test(formData.companyName)) {
      alert("Company Name should be alphanumeric.");
      return false;
    }
    if (!alphabetRegex.test(formData.pointOfContact)) {
      alert("Point of Contact should contain only alphabets.");
      return false;
    }
    if (!alphabetRegex.test(formData.state)) {
      alert("State should contain only alphabets.");
      return false;
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Phone Number should be a 10-digit numeric value.");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Customer Onboarded:", formData);
      alert("Customer Onboarded Successfully!");
    }
  };
  const handleContinue = () => {
    navigate("/customer-confirm", { state: { formData } });
  };

  return (
    <div style={containerStyle}>
      <h2>Customer Onboarding</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label style={labelStyle}>Company Name:</label>
          <input type="text" style={inputStyle} name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Address:</label>
          <textarea name="address" style={inputStyle} value={formData.address} onChange={handleChange} required></textarea>
        </div>

        <div>
          <label style={labelStyle}>Point of Contact:</label>
          <input type="text" style={inputStyle} name="pointOfContact" value={formData.pointOfContact} onChange={handleChange} required />
        </div>

       
        <div>
          <label style={labelStyle}>Phone Number:</label>
          <input type="text" style={inputStyle} name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Mail ID:</label>
          <input type="email" style={inputStyle} name="emailId" value={formData.emailId} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>GST Number:</label>
          <input type="text" style={inputStyle} name="gstNumber" value={formData.gstNumber} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Rate Card:</label>
          <input type="text" style={inputStyle} name="rateCard" value={formData.rateCard} onChange={handleChange} required />
        </div>

<div style={buttonStyleFlex}>
        <button type="button" style={buttonStyle} onClick={handleContinue} >
          Continue
        </button>
        <button type="button" style={buttonStyle} onClick={handleClear}>
          Clear
        </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerOnboarding;
