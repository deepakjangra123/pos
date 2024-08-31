import React , { useState } from "react";
import "./Items.css";
import a from "../../assets/images/a.jpg";

const Items = () => {
  const [data, setData] = useState([
    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },

    {
      name: "Sample Item 1",
      price: "$10.00",
      category: "Category 1",
      image: a,
    },
  ]);
  const onEdit=(item)=>{
    setData(data.filter((a) => a.name !== item.name));
  }

  return (
    <div className="item-table-container">
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
                <button className="action-btn" onClick={() => onEdit(item)}>
                  Edit
                </button>
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
  );
};

export default Items;
