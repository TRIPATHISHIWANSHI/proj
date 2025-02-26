
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
    width: "calc(100% - 16px)",

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
 
const SparePartsModule = () => {

    const [formData, setFormData] = useState({

        vehicleNumber: "",

        vehicleType: "Car",

        modelName: "",

        manufacturer: "",

        sparePartName: "",

        partNumber: "",

        replacementDate: "",

        partCategory: "Engine",

        quantity: "",

        costPerPart: "",

        totalCost: 0,

        warranty: "No",

        warrantyExpiry: "",

        serviceCenterName: "",

        technicianName: "",

        contactNumber: "",

        paymentMethod: "Cash",

        invoiceNumber: "",

        additionalNotes: ""

    });
 
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
 
        if (name === "quantity" || name === "costPerPart") {

            const total = (formData.quantity * formData.costPerPart) || 0;

            setFormData({ ...formData, totalCost: total, [name]: value });

        }

    };
 
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/api/spare-parts", formData);

            alert("Spare Parts Replacement Recorded Successfully!");

        } catch (error) {

            console.error("Error submitting form", error);

        }

    };
 
    return (
<div style={containerStyle}>
<h2>Spare Parts Module</h2>
<form onSubmit={handleSubmit}>
<fieldset style={fieldsetStyle}>
<legend>Vehicle Details</legend>
<label style={labelStyle}>Vehicle Number:</label>
<input style={inputStyle} type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required />
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Spare Parts Details</legend>
<label style={labelStyle}>Spare Part Name:</label>
<input style={inputStyle} type="text" name="sparePartName" value={formData.sparePartName} onChange={handleChange} required />
<label style={labelStyle}>Part Number:</label>
<input style={inputStyle} type="text" name="partNumber" value={formData.partNumber} onChange={handleChange} required />
<label style={labelStyle}>Replacement Date:</label>
<input style={inputStyle} type="date" name="replacementDate" value={formData.replacementDate} onChange={handleChange} required />
<label style={labelStyle}>Part Category:</label>
<select style={inputStyle} name="partCategory" value={formData.partCategory} onChange={handleChange}>
<option value="Engine">Engine</option>
<option value="Brake">Brake</option>
<option value="Suspension">Suspension</option>
<option value="Electrical">Electrical</option>
</select>
<label style={labelStyle}>Quantity:</label>
<input style={inputStyle} type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
<label style={labelStyle}>Cost per Part:</label>
<input style={inputStyle} type="number" name="costPerPart" value={formData.costPerPart} onChange={handleChange} required />
<label style={labelStyle}>Total Cost (Auto-Calculated):</label>
<input style={inputStyle} type="number" name="totalCost" value={formData.totalCost} readOnly />
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
 
export default SparePartsModule;

 