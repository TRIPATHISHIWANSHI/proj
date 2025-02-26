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

const VehicleConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData || {};

    return (
        <div style={containerStyle}>
    <h2>Confirm Vehicle Details</h2>
    <p><span style={labelStyle}>Vehicle Number:</span> {formData.vehicleNumber}</p>
    <p><span style={labelStyle}>Register Name:</span> {formData.registerName}</p>
    <p><span style={labelStyle}>Vehicle Type:</span> {formData.vehicleType}</p>
    <p><span style={labelStyle}>Gross Vehicle Weight:</span> {formData.grossVehicleWeight}</p>
    <p><span style={labelStyle}>Registration Date:</span> {formData.registrationDate}</p>
    <p><span style={labelStyle}>Fitness Valid Upto:</span> {formData.fitnessValidUpto}</p>
    <p><span style={labelStyle}>Tax Valid Upto:</span> {formData.taxValidUpto}</p>
    <p><span style={labelStyle}>Insurance Valid Upto:</span> {formData.insuranceValidUpto}</p>
    <p><span style={labelStyle}>Pollution Valid Upto:</span> {formData.pollutionValidUpto}</p>
    <p><span style={labelStyle}>State Permit Valid Upto:</span> {formData.statePermitValidUpto}</p>
    <p><span style={labelStyle}>National Permit:</span> {formData.nationalPermit}</p>
    <p><span style={labelStyle}>Permit Valid Upto:</span> {formData.permitUpto}</p>
    <p><span style={labelStyle}>Remarks:</span> {formData.remarks}</p>

    <div style={buttonStyleFlex}>
        <button style={buttonStyle} onClick={() => navigate(-1)}>Back</button>
        <button style={buttonStyle} onClick={() => alert("Vehicle details confirmed!")}>Submit</button>
    </div>
</div>

    
    );
};

export default VehicleConfirmation;
