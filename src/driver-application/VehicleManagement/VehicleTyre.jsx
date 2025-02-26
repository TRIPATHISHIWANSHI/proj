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
    width: "calc(100% - 16px)",
    padding: "8px",
    boxSizing: "border-box",
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
 
const TyreReplacementModule = () => {
    const [formData, setFormData] = useState({
        vehicleNumber: "",
        vehicleType: "Car",
        modelName: "",
        manufacturer: "",
        tyreNumber: "",
        presentKM: "",
        expectedKM: "",
        tyreBrand: "",
        tyreSize: "",
        replacementDate: "",
        tyrePosition: "Front Left",
        quantity: "",
        costPerTyre: "",
        totalCost: 0,
        warranty: "No",
        warrantyExpiry: "",
        serviceCenterName: "",
        serviceCenterAddress: "",
        serviceCenterContact: "",
        technicianName: "",
        contactNumber: "",
        paymentMethod: "Cash",
        invoiceNumber: "",
        totalAmount: "",
        paymentStatus: "Pending",
        additionalNotes: ""
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
 
        if (name === "quantity" || name === "costPerTyre") {
            const total = (formData.quantity * formData.costPerTyre) || 0;
            setFormData({ ...formData, totalCost: total, [name]: value });
        }
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/tyre-replacement", formData);
            alert("Tyre Replacement Recorded Successfully!");
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };
 
    return (
<div style={containerStyle}>
<h2>Vehicle Tyre Replacement Module</h2>
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
<option value="Bike">Bike</option>
</select>
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Tyre Details</legend>
<label style={labelStyle}>Tyre Number:</label>
<input style={inputStyle} type="text" name="tyreNumber" value={formData.tyreNumber} onChange={handleChange} required />
<label style={labelStyle}>Present KM:</label>
<input style={inputStyle} type="number" name="presentKM" value={formData.presentKM} onChange={handleChange} required />
<label style={labelStyle}>Expected KM's:</label>
<input style={inputStyle} type="number" name="expectedKM" value={formData.expectedKM} onChange={handleChange} required />
<label style={labelStyle}>Tyre Brand:</label>
<input style={inputStyle} type="text" name="tyreBrand" value={formData.tyreBrand} onChange={handleChange} required />
<label style={labelStyle}>Tyre Size:</label>
<input style={inputStyle} type="text" name="tyreSize" value={formData.tyreSize} onChange={handleChange} required />
<label style={labelStyle}>Replacement Date:</label>
<input style={inputStyle} type="date" name="replacementDate" value={formData.replacementDate} onChange={handleChange} required />
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Service Center Details</legend>
<label style={labelStyle}>Service Center Name:</label>
<input style={inputStyle} type="text" name="serviceCenterName" value={formData.serviceCenterName} onChange={handleChange} required />
<label style={labelStyle}>Service Center Address:</label>
<input style={inputStyle} type="text" name="serviceCenterAddress" value={formData.serviceCenterAddress} onChange={handleChange} required />
<label style={labelStyle}>Service Center Contact:</label>
<input style={inputStyle} type="text" name="serviceCenterContact" value={formData.serviceCenterContact} onChange={handleChange} pattern="\d{10}" required />
</fieldset>
<fieldset style={fieldsetStyle}>
<legend>Payment Details</legend>
<label style={labelStyle}>Payment Method:</label>
<select style={inputStyle} name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
<option value="Cash">Cash</option>
<option value="Card">Card</option>
<option value="Online">Online</option>
</select>
<label style={labelStyle}>Invoice Number:</label>
<input style={inputStyle} type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} required />
<label style={labelStyle}>Total Amount:</label>
<input style={inputStyle} type="number" name="totalAmount" value={formData.totalAmount} onChange={handleChange} required />
<label style={labelStyle}>Payment Status:</label>
<select style={inputStyle} name="paymentStatus" value={formData.paymentStatus} onChange={handleChange}>
<option value="Pending">Pending</option>
<option value="Completed">Completed</option>
<option value="Failed">Failed</option>
</select>
</fieldset>
<button type="submit" style={buttonStyle}>Submit</button>
</form>
</div>
    );
};
 
export default TyreReplacementModule;