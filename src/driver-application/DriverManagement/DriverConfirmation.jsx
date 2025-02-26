import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
};

const buttonStyleFlex = {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem"
};

const labelStyle = {
    fontWeight: "bold",
};

const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

const DriverConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData || {};

    return (
        <div style={containerStyle}>
        <h2>Confirm Driver Details</h2>
        <p><span style={labelStyle}>Driver ID(AUTO_GENERATED):</span> {formData.driverId}</p>
        <p><span style={labelStyle}>First Name:</span> {formData.firstName}</p>
        <p><span style={labelStyle}>Second Name:</span> {formData.secondName}</p>
        <p><span style={labelStyle}>Surname:</span> {formData.surname}</p>
        <p><span style={labelStyle}>Father's Name:</span> {formData.fatherName}</p>
        <p><span style={labelStyle}>Address:</span> {formData.address}</p>
        <p><span style={labelStyle}>Date of Birth:</span> {formData.dob}</p>
        <p><span style={labelStyle}>DL Number:</span> {formData.dlNumber}</p>
        <p><span style={labelStyle}>DL Valid Till:</span> {formData.dlValidTill}</p>
        <p><span style={labelStyle}>DL Type:</span> {formData.dlType}</p>
        <p><span style={labelStyle}>Joining Date:</span> {formData.joiningDate}</p>
        <p><span style={labelStyle}>Basic Payment:</span> {formData.basicPayment}</p>
        <p><span style={labelStyle}>Name as per Bank:</span> {formData.nameAsPerBank}</p>
        <p><span style={labelStyle}>Bank Account Number:</span> {formData.bankAccountNumber}</p>
        <p><span style={labelStyle}>IFSC Code:</span> {formData.ifsc}</p>
        <p><span style={labelStyle}>Bank Name:</span> {formData.bankName}</p>
        <p><span style={labelStyle}>PAN Number:</span> {formData.panNo}</p>
        <p><span style={labelStyle}>Aadhar Number:</span> {formData.aadharNumber}</p>
        <p><span style={labelStyle}>Contact Number:</span> {formData.contactNumber}</p>
        <p><span style={labelStyle}>Emergency Contact:</span> {formData.emergencyContact}</p>
    
        <div style={buttonStyleFlex}>
            <button style={buttonStyle} onClick={() => navigate(-1)}>Back</button>
            <button style={buttonStyle} onClick={() => alert("Customer details confirmed!")}>Submit</button>
        </div>
    </div>
    
    );
};

export default DriverConfirmation;
