import React, { useState, useEffect } from "react";
import "./Modal3.css";

const Modal = ({ isOpen, onClose, item, onSave }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setCategory(item.category);
    }
  }, [item]);

  const handleSave = () => {
    onSave({ ...item, name, price, category });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="out_body">
      <div className="m_container">
        <h2>{item ? "Edit Item" : "Add New Item"}</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
       <div className="buttons">
       <button onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={onClose}>
          Cancel
        </button>
       </div>
      </div>
    </div>
  );
};

export default Modal;
