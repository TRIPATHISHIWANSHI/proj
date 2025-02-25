import React, { useState } from "react";
import axios from "axios";
import './styles/VehicleOnboarding.css'
const VehicleOnboardingForm = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    registerName: "",
    vehicleType: "",
    grossVehicleWeight: "",
    registrationDate: "",
    fitnessValidUpto: "",
    taxValidUpto: "",
    insuranceValidUpto: "",
    pollutionValidUpto: "",
    statePermitValidUpto: "",
    nationalPermit: "No",
    permitUpto: "",
    remarks: "",
  });

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


  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset permitUpto if National Permit is "No"
    if (name === "nationalPermit" && value === "No") {
      setFormData({ ...formData, permitUpto: "" });
    }
  };

  // Form Validation
  const validateForm = () => {
    const alphaNumericRegex = /^[a-zA-Z0-9 ]+$/;
    const alphabetRegex = /^[a-zA-Z ]+$/;

    if (!alphaNumericRegex.test(formData.vehicleNumber)) {
      alert("Vehicle Number should be alphanumeric.");
      return false;
    }
    if (!alphabetRegex.test(formData.registerName)) {
      alert("Register Name should contain only alphabets.");
      return false;
    }
    if (!alphaNumericRegex.test(formData.grossVehicleWeight)) {
      alert("Gross Vehicle Weight should be alphanumeric.");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Vehicle Onboarded:", formData);
      alert("Vehicle Onboarded Successfully!");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 className="">Vehicle Onboarding</h2>
      <form onSubmit={handleSubmit} className="formCSS space-y-4">

        <div>
          <label style={labelStyle} className="block font-semibold">Vehicle Number:</label>
          <input type="text"  style={inputStyle}  name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Register Name:</label>
          <input type="text"  style={inputStyle} name="registerName" value={formData.registerName} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Vehicle Type:</label>
          <select name="vehicleType"  style={inputStyle} value={formData.vehicleType} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Type</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
          </select>
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Gross Vehicle Weight:</label>
          <input type="text"  style={inputStyle} name="grossVehicleWeight" value={formData.grossVehicleWeight} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Registration Date:</label>
          <input type="date"  style={inputStyle} name="registrationDate" value={formData.registrationDate} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Fitness Valid Upto:</label>
          <input type="date"  style={inputStyle} name="fitnessValidUpto" value={formData.fitnessValidUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Tax Valid Upto:</label>
          <input type="date"  style={inputStyle} name="taxValidUpto" value={formData.taxValidUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Insurance Valid Upto:</label>
          <input type="date"  style={inputStyle} name="insuranceValidUpto" value={formData.insuranceValidUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">Pollution Valid Upto:</label>
          <input type="date"  style={inputStyle} name="pollutionValidUpto" value={formData.pollutionValidUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">State Permit Valid Upto:</label>
          <input type="date"  style={inputStyle} name="statePermitValidUpto" value={formData.statePermitValidUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div>
          <label style={labelStyle} className="block font-semibold">National Permit:</label>
          <select name="nationalPermit"  style={inputStyle} value={formData.nationalPermit} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Show Permit Upto Date only if National Permit is Yes */}
        {formData.nationalPermit === "Yes" && (
          <div>
            <label style={labelStyle} className="block font-semibold">If Yes, Permit Upto:</label>
            <input type="date"   style={inputStyle} name="permitUpto" value={formData.permitUpto} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
        )}

        <div>
          <label style={labelStyle} className="block font-semibold">Remarks:</label>
          <textarea name="remarks"  style={inputStyle} value={formData.remarks} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        </div>

        <button type="submit"  style={inputStyle} className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VehicleOnboardingForm;
