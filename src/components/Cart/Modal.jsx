import React from "react";
import "./Modal2.css"; 
const Modal = ({ isVisible, onClose, subtotal, total, onSubmit }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Customer Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className=" input" type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input className=" input" type="text" id="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="payment">Payment Mode:</label>
            <select className=" input" style={{height:'40px'}} id="payment" required>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div className="product-summary">
            <h3>Product Details</h3>
            <p>Subtotal: ${subtotal}</p>
            <p>Total: ${total}</p>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Generate Bill</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
