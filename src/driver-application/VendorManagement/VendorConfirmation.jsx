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

const VendorConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData || {};

    return (
        <div style={containerStyle}>
        <h2>Confirm Vendor Details</h2>
        <p><span style={labelStyle}>Supplier Name:</span> {formData.supplierName}</p>
        <p><span style={labelStyle}>Vendor Site Code:</span> {formData.venderSiteCode}</p>
        <p><span style={labelStyle}>Phone Number:</span> {formData.phoneNumber}</p>
        <p><span style={labelStyle}>Address Line 1:</span> {formData.addressLine1}</p>
        <p><span style={labelStyle}>Address Line 2:</span> {formData.addressLine2}</p>
        <p><span style={labelStyle}>Town/City:</span> {formData.townCity}</p>
        <p><span style={labelStyle}>State:</span> {formData.state}</p>
        <p><span style={labelStyle}>Pin Code:</span> {formData.pinCode}</p>
        <p><span style={labelStyle}>Email ID:</span> {formData.emailId}</p>
        <p><span style={labelStyle}>Service Registration Number:</span> {formData.serviceRegistrationNumber}</p>
        <p><span style={labelStyle}>Service Tax:</span> {formData.serviceTax}</p>
        <p><span style={labelStyle}>PAN Number:</span> {formData.panNumber}</p>
        <p><span style={labelStyle}>TDS Rate Section:</span> {formData.tdsRateSection}</p>
        <p><span style={labelStyle}>Beneficiary Name:</span> {formData.beneficiaryName}</p>
        <p><span style={labelStyle}>Account Number:</span> {formData.accountNumber}</p>
        <p><span style={labelStyle}>IFSC Code:</span> {formData.IFSCcode}</p>
        <p><span style={labelStyle}>Branch Name:</span> {formData.branchName}</p>
    
        <div style={buttonStyleFlex}>
            <button style={buttonStyle} onClick={() => navigate(-1)}>Back</button>
            <button style={buttonStyle} onClick={() => alert("Supplier details confirmed!")}>Submit</button>
        </div>
    </div>
    
    );
};

export default VendorConfirmation;
