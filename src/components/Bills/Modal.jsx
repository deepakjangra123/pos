import React from 'react';
import './Modal1.css'; // Import the CSS file for the modal

const Modal = ({ data, onClose }) => {
  const handleGenerateInvoice = () => {
    // API call to generate an invoice
    fetch(`http://localhost:5000/RetailStorePOSAppAPI/v1/transactions/invoice/${data.id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        // Display the success message and file path in an alert
        alert(`Invoice generated successfully!\n\nMessage: ${result.message}\nFile Path: ${result.filePath}`);
      })
      .catch((error) => {
        console.error('Error generating invoice:', error);
        alert('Failed to generate invoice.');
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="title">Customer Details</h1>
        <div className="modal-detail">
          <p><strong>ID:</strong> {data.id}</p>
          <h3><p><strong>Customer:</strong> {data.name}</p></h3>
          <h3><p><strong>Phone Number:</strong> {data.phoneNumber}</p></h3>
          <h3><p><strong>Sub Amount:</strong> {data.subamount}</p></h3>
          <h3><p><strong>Total Amount:</strong> {data.totalAmount}</p></h3>
        </div>
        <button className="btn" onClick={handleGenerateInvoice}><h3>Generate Invoice</h3></button>
        <button className="btn" onClick={onClose}><h3>Close</h3></button>
      </div>
    </div>
  );
};

export default Modal;
