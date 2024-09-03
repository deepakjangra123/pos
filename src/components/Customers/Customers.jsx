import React from "react";

const Customers = () => {
  const [data, setData] = useState([
    {
      customer :"Deepak jangra",
      Phone_number:"9518673784",
      Created_on:"2383423"

    },
  ]);
  return 
  <>
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
  </>;
};

export default Customers;
