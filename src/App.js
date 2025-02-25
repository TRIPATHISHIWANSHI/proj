import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import VehicleManagement from "./driver-application/VehicleManagement/VehicleManagement";
import VehicleOnboarding from "./driver-application/VehicleManagement/VehicleOnboarding";
import LiveFleetTracking from "./driver-application/VehicleManagement/LiveFleetTracking";
import OilService from "./driver-application/VehicleManagement/OilService";
import SpareParts from "./driver-application/VehicleManagement/SpareParts";
import VehicleType from "./driver-application/VehicleManagement/VehicleType";
import DriverManagement from "./driver-application/DriverManagement/DriverManagement";
import DriverOnboarding from "./driver-application/DriverManagement/DriverOnboarding.jsx";
import ExpensesManagement from "./driver-application/ExpenseManagement/ExpensesManagement";
import VehicleExpenses from "./driver-application/ExpenseManagement/VehicleExpenses";
import Others from "./driver-application/ExpenseManagement/Others";
import VendorManagement from "./driver-application/VendorManagement/VendorManagement";
import Advance from "./driver-application/VendorManagement/Advance";
import Deduction from "./driver-application/VendorManagement/Deduction";
import Payment from "./driver-application/VendorManagement/Payment";
import TripSheet from "./driver-application/VendorManagement/TripSheet";
import CustomerManagement from "./driver-application/CustomerManagement/CustomerManagement";
import VendorOnboarding from "./driver-application/VendorManagement/VendorOnboarding.jsx";
import Agreement from "./driver-application/CustomerManagement/Agreement.jsx";
import GSTFile from "./driver-application/CustomerManagement/GSTFile.jsx";
import Invoice from "./driver-application/CustomerManagement/Invoice.jsx";
import PaymentStatus from "./driver-application/CustomerManagement/PaymentStatus.jsx";
import CustomerOnboarding from "./driver-application/CustomerManagement/CustomerOnboarding.jsx";
import MIS from "./driver-application/CustomerManagement/MIS";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Vehicle Management Routes */}
        <Route path="/vehicle-management" element={<VehicleManagement />} />
        <Route path="/vehicle-onboarding" element={<VehicleOnboarding />} />
        <Route path="/live-fleet-tracking" element={<LiveFleetTracking />} />
        <Route path="/oil-service" element={<OilService />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/vehicle-type" element={<VehicleType />} />

        {/* Driver Management Routes */}
        <Route path="/driver-management" element={<DriverManagement />} />
        <Route path="/driver-onboarding" element={<DriverOnboarding />} />

        {/* Expense Management Routes */}
        <Route path="/expenses-management" element={<ExpensesManagement />} />
        <Route path="/vehicle-expenses" element={<VehicleExpenses />} />
        <Route path="/others" element={<Others />} />

        {/* Vendor Management Routes */}
        <Route path="/vendor-management" element={<VendorManagement />} />
        <Route path="/vendor-onboarding" element={<VendorOnboarding/>} />
        <Route path="/advance" element={<Advance />} />
        <Route path="/deduction" element={<Deduction />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/trip-sheet" element={<TripSheet />} />

        {/* Customer Management */}
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/customer-onboarding" element={<CustomerOnboarding/>} />
        <Route path="/agreement" element={<Agreement/>} />
        <Route path="/gst-file" element={<GSTFile/>} />
        <Route path="/invoice" element={<Invoice/>} />
        <Route path="/mis" element={<MIS />} />
        <Route path="/payment-status" element={<PaymentStatus/>} />
      </Routes>
    </Router>
  );
};

export default App;
