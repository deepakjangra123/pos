import React, { useState } from "react";
import "./Items.css";
import a from "../../assets/images/a.jpg";
import Modal from "./Modal.jsx";

const Items = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
    {
      id: 1,
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
    // Add more items if needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const openModal = (item = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleSave = (item) => {
    if (item.id) {
      // Editing an existing item
      setData(data.map((i) => (i.id === item.id ? item : i)));
    } else {
      // Adding a new item
      setData([...data, { ...item, id: data.length + 1 }]);
    }
  };

  const onDelete = (item) => {
    setData(data.filter((i) => i.id !== item.id));
  };

  return (
    <div className="item-page">
      <div className="flex-btn">
        <button className="add-item-btn" onClick={() => openModal()}>
          Add New Item
        </button>
      </div>
      <table className="item-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Item</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt={item.name} className="item-image" />
              </td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="action-btn" onClick={() => openModal(item)}>
                  Edit
                </button>
                <button
                  className="action-btn"
                  style={{ backgroundColor: "#eb3036" }}
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={editingItem}
        onSave={handleSave}
      />
    </div>
  );
};

export default Items;
