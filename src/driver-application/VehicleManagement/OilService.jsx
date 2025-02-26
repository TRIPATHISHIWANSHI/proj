import React, { useState } from "react";
import axios from "axios";
 
const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
};
 
const fieldsetStyle = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd"
};
 
const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
};
 
const inputStyle = {
    boxSizing: "border-box",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px"
};
 
const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%"
};
 
const OilService = () => {
    const [formData, setFormData] = useState({
        vehicleNumber: "",
        vehicleType: "Car",
        modelName: "",
        manufacturer: "",
        serviceDate: "",
        odometerReading: "",
        lastServiceDate: "",
        oilType: "Synthetic",
        oilBrand: "",
        oilQuantity: "",
        oilGrade: "",
        filterReplaced: "No",
        additionalNotes: "",
        serviceCost: "",
        paymentMethod: "Cash",
        invoiceNumber: "",
        serviceCenterName: "",
        technicianName: "",
        contactNumber: ""
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/oil-service", formData);
            alert("Oil Service Recorded Successfully!");
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };
 
    return (
<div style={containerStyle}>
<h2>Oil Service Module</h2>
<form onSubmit={handleSubmit}>
<fieldset style={fieldsetStyle}>
<legend>Vehicle Details</legend>
<label style={labelStyle}>Vehicle Number:</label>
<input style={inputStyle} type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required />
<label style={labelStyle}>Vehicle Type:</label>
<select style={inputStyle} name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
<option value="Car">Car</option>
<option value="Truck">Truck</option>
<option value="Bus">Bus</option>
</select>
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Oil Service Details</legend>
<label style={labelStyle}>Service Date:</label>
<input style={inputStyle} type="date" name="serviceDate" value={formData.serviceDate} onChange={handleChange} required />
<label style={labelStyle}>Odometer Reading (KM):</label>
<input style={inputStyle} type="number" name="odometerReading" value={formData.odometerReading} onChange={handleChange} required />
<label style={labelStyle}>Last Service Date:</label>
<input style={inputStyle} type="date" name="lastServiceDate" value={formData.lastServiceDate} onChange={handleChange} />
<label style={labelStyle}>Oil Type:</label>
<select style={inputStyle} name="oilType" value={formData.oilType} onChange={handleChange}>
<option value="Synthetic">Synthetic</option>
<option value="Semi-Synthetic">Semi-Synthetic</option>
<option value="Conventional">Conventional</option>
</select>
<label style={labelStyle}>Oil Brand:</label>
<input style={inputStyle} type="text" name="oilBrand" value={formData.oilBrand} onChange={handleChange} required />
<label style={labelStyle}>Oil Quantity (Liters):</label>
<input style={inputStyle} type="number" name="oilQuantity" value={formData.oilQuantity} onChange={handleChange} required />
<label style={labelStyle}>Oil Grade:</label>
<input style={inputStyle} type="text" name="oilGrade" value={formData.oilGrade} onChange={handleChange} required />
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Service Provider Details</legend>
<label style={labelStyle}>Service Center Name:</label>
<input style={inputStyle} type="text" name="serviceCenterName" value={formData.serviceCenterName} onChange={handleChange} required />
<label style={labelStyle}>Technician Name:</label>
<input style={inputStyle} type="text" name="technicianName" value={formData.technicianName} onChange={handleChange} required />
<label style={labelStyle}>Contact Number:</label>
<input style={inputStyle} type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} pattern="\d{10}" required />
</fieldset>
<button type="submit" style={buttonStyle}>Submit</button>
</form>
</div>
    );
};
 
export default OilService;