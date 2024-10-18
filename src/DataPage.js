
import React from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const DataPage = () => {
  const location = useLocation();
  const { fetchedData } = location.state || { fetchedData: null }; 

  return (
    <div className="data-page-container">
      <h1 style={{color: 'white'}}>Fetched Data</h1>
      {fetchedData ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {Object.keys(fetchedData).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(fetchedData).map((value, index) => (
                <td key={index}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataPage;
