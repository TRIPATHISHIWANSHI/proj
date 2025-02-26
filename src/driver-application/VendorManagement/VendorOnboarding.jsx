import React, { useState } from "react";  
import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VendorOnboarding = () => {
  const [formData, setFormData] = useState({
    supplierName: "",
    venderSiteCode: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    townCity: "",
    state: "",
    pinCode: "",
    emailId: "",
    serviceRegistrationNumber: "",
    serviceTax: "",
    panNumber: "",
    tdsRateSection: "",
    beneficiaryName: "",
    accountNumber: "",
    IFSCcode: "",
    branchName: "",
  });
  const navigate = useNavigate();
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

  const labelStyle = { display: "block", marginBottom: "5px", fontWeight: "normal" };
  const inputStyle = { width: "100%", boxSizing: "border-box", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" };
  const buttonStyle = { backgroundColor: "black", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%" };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Validation
  const validateForm = () => {
    const alphaNumericRegex = /^[a-zA-Z0-9 ]+$/;
    const alphabetRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const pinRegex = /^[0-9]{6}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    if (!alphabetRegex.test(formData.supplierName)) {
      alert("Supplier Name should contain only alphabets.");
      return false;
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Phone Number should be 10 digits.");
      return false;
    }
    if (!pinRegex.test(formData.pinCode)) {
      alert("Pin Code should be 6 digits.");
      return false;
    }
    if (!panRegex.test(formData.panNumber)) {
      alert("Invalid PAN Number format.");
      return false;
    }
    if (!ifscRegex.test(formData.IFSCcode)) {
      alert("Invalid IFSC Code format.");
      return false;
    }
    return true;
  };
  const handleContinue = () => {
    navigate("/vendor-confirm", { state: { formData } });
  };
  const handleClear = () => {
    setFormData({
      supplierName: "",
      venderSiteCode: "",
      phoneNumber: "",
      addressLine1: "",
      addressLine2: "",
      townCity: "",
      state: "",
      pinCode: "",
      emailId: "",
      serviceRegistrationNumber: "",
      serviceTax: "",
      panNumber: "",
      tdsRateSection: "",
      beneficiaryName: "",
      accountNumber: "",
      IFSCcode: "",
      branchName: "",
    });
  };
  

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Vendor Onboarded:", formData);
      alert("Vendor Onboarded Successfully!");

      // Example: Sending Data to Backend
      axios.post("https://your-backend-api.com/onboard-vendor", formData)
        .then((response) => {
          alert("Vendor Data Submitted Successfully!");
        })
        .catch((error) => {
          alert("Error Submitting Vendor Data.");
        });
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Vendor Onboarding</h2>
      <form onSubmit={handleSubmit} className="formCSS space-y-4">
        <div>
          <label style={labelStyle}>Supplier Name:</label>
          <input type="text" style={inputStyle} name="supplierName" value={formData.supplierName} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Vendor Site Code:</label>
          <select name="venderSiteCode" style={inputStyle} value={formData.venderSiteCode} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Rental">Rental</option>
            <option value="Adhoc">Adhoc</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Phone Number:</label>
          <input type="text" style={inputStyle} name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Address Line 1:</label>
          <textarea name="addressLine1" style={inputStyle} value={formData.addressLine1} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Address Line 2:</label>
          <textarea name="addressLine2" style={inputStyle} value={formData.addressLine2} onChange={handleChange} />
        </div>

        <div>
          <label style={labelStyle}>Town/City:</label>
          <input type="text" style={inputStyle} name="townCity" value={formData.townCity} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>State:</label>
          <input type="text" style={inputStyle} name="state" value={formData.state} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Pin Code:</label>
          <input type="text" style={inputStyle} name="pinCode" value={formData.pinCode} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Email ID:</label>
          <input type="email" style={inputStyle} name="emailId" value={formData.emailId} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Service Registration Number(GST):</label>
          <input type="text" style={inputStyle} name="serviceRegistrationNumber" value={formData.serviceRegistrationNumber} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>Sevice tax rate if any:</label>
          <input type="email" style={inputStyle} name="serviceTax" value={formData.serviceTax} onChange={handleChange} required />
        </div>        
        <div>
          <label style={labelStyle}>PAN Number:</label>
          <input type="text" style={inputStyle} name="panNumber" value={formData.panNumber} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>TDS rate & Section if any:</label>
          <input type="text" style={inputStyle} name="tdsRateSection" value={formData.tdsRateSection} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>Beneficiary_Name (Mention on Cheque or Pass book):</label>
          <input type="text" style={inputStyle} name="beneficiaryName" value={formData.beneficiaryName} onChange={handleChange} required />
        </div>
        <div>
          <label style={labelStyle}>A/c Number:</label>
          <input type="text" style={inputStyle} name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </div>
        

        <div>
          <label style={labelStyle}>IFSC Code:</label>
          <input type="text" style={inputStyle} name="IFSCcode" value={formData.IFSCcode} onChange={handleChange} required />
        </div>

        <div>
          <label style={labelStyle}>Branch Name:</label>
          <input type="text" style={inputStyle} name="branchName" value={formData.branchName} onChange={handleChange} required />
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

export default VendorOnboarding;
