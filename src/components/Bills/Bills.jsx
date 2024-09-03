import React, { useState, useEffect } from 'react';
import './Bills.css';
import Modal from './Modal'; // Import the Modal component

const Bills = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/RetailStorePOSAppAPI/v1/transactions')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only on component mount

  const handleViewClick = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  return (
    <>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Total Amount</th>
            <th>Tax Rate</th>
            <th>Total with Tax</th>
            <th>Payment Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customerId || 'N/A'}</td> {/* Handle missing customerId */}
                <td>{item.totalAmount}</td>
                <td>{item.taxRate}</td>
                <td>{item.totalWithTax}</td>
                <td>{item.paymentMethod}</td>
                <td>
                  <button onClick={() => handleViewClick(item)}>View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && selectedData && (
        <Modal data={selectedData} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Bills;
