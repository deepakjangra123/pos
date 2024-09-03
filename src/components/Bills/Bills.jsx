import React, { useState } from 'react';
import './Bills.css';
import Modal from './Modal'; // Import the Modal component

const Bills = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    { id: '12saa7s897ca7893', name: 'Honey', phoneNumber: '123-456-7890', subamount: 50, totalAmount: 100 },
    { id: '43uch4fy5y43fg54gjq8q', name: 'Rohit', phoneNumber: '987-654-3210', subamount: 75, totalAmount: 150 },
    // Add more data as needed
  ];

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
            <th>Customer</th>
            <th>Phone Number</th>
            <th>Sub Amount</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.subamount}</td>
              <td>{item.totalAmount}</td>
              <td>
                <button onClick={() => handleViewClick(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedData && (
        <Modal data={selectedData} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Bills;
