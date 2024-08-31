import React, { useState } from "react";
import "./Cart.css";
import a from "../../assets/images/a.jpg";
import Modal from "./Modal"; // Import the Modal component

const Cart = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState( [
    {
      name: "Sample Item 1",
      price: "$10.00",
      quantity: 5,
      image: a, // Replace with actual image URL
    },
    {
      name: "Sample Item 2",
      price: "$20.00",
      quantity: 3,
      image: a, // Replace with actual image URL
    },
    {
      name: "Sample Item 3",
      price: "$20.00",
      quantity: 3,
      image: a, // Replace with actual image URL
    },
  ]);



  const subtotal = 24; // Calculate based on your actual data
  const total = 30; // This can include tax or additional charges

  const handlePayNow = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleGenerateBill = () => {
    // Logic for generating the bill
    alert("Bill generated successfully!");
    setModalVisible(false);
  };
  const onEdit=(item)=>{
    setData(data.filter((a) => a.name !== item.name));
  }

  return (
    <>
      <div className="item-table-container">
        <table className="item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.name} className="item-image" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="action-btn"
                    style={{ backgroundColor: "#eb3036" }}
                    onClick={() => onEdit(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-sec">
        <h1>Sub Total: ${subtotal}/-</h1>
        <button className="action-btn" onClick={handlePayNow}>
          Pay Now
        </button>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        subtotal={subtotal}
        total={total}
        onSubmit={handleGenerateBill}
      />
    </>
  );
};

export default Cart;
