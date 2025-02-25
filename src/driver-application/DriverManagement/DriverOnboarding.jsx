// Driver Onboarding

import React, { useState } from "react";

import axios from "axios";

const containerStyle = {
  maxWidth: "800px",

  margin: "auto",

  padding: "20px",

  border: "1px solid #ccc",

  borderRadius: "8px",

  backgroundColor: "#f9f9f9",
};

const fieldsetStyle = {
  marginBottom: "15px",

  padding: "10px",

  borderRadius: "5px",

  border: "1px solid #ddd",
};

const labelStyle = {
  display: "block",

  marginBottom: "5px",

  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",

  padding: "8px",

  marginBottom: "10px",

  border: "1px solid #ccc",

  borderRadius: "4px",
};

const buttonStyle = {
  backgroundColor: "#28a745",

  color: "white",

  padding: "10px 15px",

  border: "none",

  borderRadius: "5px",

  cursor: "pointer",

  width: "100%",
};

const DriverOnboarding = () => {
  const [formData, setFormData] = useState({
    driverId: "AUTO_GENERATED",

    firstName: "",

    secondName: "",

    surname: "",

    fatherName: "",

    address: "",

    dob: "",

    dlNumber: "",

    dlValidTill: "",

    dlType: "LMV",

    joiningDate: "",

    basicPayment: "",

    nameAsPerBank: "",

    bankAccountNumber: "",

    ifsc: "",

    bankName: "",

    panNo: "",

    aadharNumber: "",

    contactNumber: "",

    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/driver", formData);

      alert("Driver onboarded successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Driver Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <fieldset style={fieldsetStyle}>
          <legend>Personal Details</legend>
          <label style={labelStyle}>Driver ID (Auto Generated):</label>
          <input
            style={inputStyle}
            type="text"
            name="driverId"
            value={formData.driverId}
            disabled
          />
          <label style={labelStyle}>First Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
          <label style={labelStyle}>Second Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
            pattern="[A-Za-z]+"
          />
          <label style={labelStyle}>Surname:</label>
          <input
            style={inputStyle}
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
          <label style={labelStyle}>Father's Name:</label>
          <input
            style={inputStyle}
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
          <label style={labelStyle}>Address:</label>
          <input
            style={inputStyle}
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <label style={labelStyle}>Date of Birth:</label>
          <input
            style={inputStyle}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset style={fieldsetStyle}>
          <legend>Driving License Details</legend>
          <label style={labelStyle}>DL Number:</label>
          <input
            style={inputStyle}
            type="text"
            name="dlNumber"
            value={formData.dlNumber}
            onChange={handleChange}
            pattern="[A-Za-z0-9]+"
            required
          />
          <label style={labelStyle}>DL Valid Till:</label>
          <input
            style={inputStyle}
            type="date"
            name="dlValidTill"
            value={formData.dlValidTill}
            onChange={handleChange}
            required
          />
          <label style={labelStyle}>DL Type:</label>
          <select
            style={inputStyle}
            name="dlType"
            value={formData.dlType}
            onChange={handleChange}
          >
            <option value="LMV">LMV</option>
            <option value="TRANS">TRANS</option>
          </select>
        </fieldset>
        <fieldset style={fieldsetStyle}>
          <legend>Bank Details</legend>
          <label style={labelStyle}>Name as per Bank:</label>
          <input
            style={inputStyle}
            type="text"
            name="nameAsPerBank"
            value={formData.nameAsPerBank}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
          <label style={labelStyle}>Bank Account Number:</label>
          <input
            style={inputStyle}
            type="number"
            name="bankAccountNumber"
            value={formData.bankAccountNumber}
            onChange={handleChange}
            required
          />
          <label style={labelStyle}>IFSC:</label>
          <input
            style={inputStyle}
            type="text"
            name="ifsc"
            value={formData.ifsc}
            onChange={handleChange}
            pattern="[A-Za-z0-9]+"
            required
          />
        </fieldset>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DriverOnboarding;
