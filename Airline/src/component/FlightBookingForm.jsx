import React, { useState } from 'react';
import RandomAirline from './RandomAirline';
import { getAllData } from '../AirService';

const FlightBookingForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cabin, setCabin] = useState('economy');
  const [submitted, setSubmitted] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleCabinChange = (e) => {
    setCabin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await fetchRecords();
  };



  const fetchRecords = async () => {
    try {
      const airlineData = await getAllData();
      setFetchData(airlineData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p style={{ textAlign: 'center', color: 'white' }}>Choose Origin & Destination Airports</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="origin">Origin:</label>
          <select id="origin" className="custom-select" value={origin} onChange={handleOriginChange}>
            <option value="" disabled selected hidden>Choose Origin Airport</option>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
          </select>

          <label htmlFor="destination">Destination:</label>
          <select id="destination" className="custom-select" value={destination} onChange={handleDestinationChange}>
            <option value="" disabled selected hidden>Choose Destination Airport</option>
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="SYD">SYD</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
          </select>

          <label htmlFor="cabin">Cabin Selection:</label>
          <select id="cabin" className="custom-select" value={cabin} onChange={handleCabinChange}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
          </select>

          <button type="submit">Search</button>
        </form>
        {submitted && (
          <>
            <div className="results">
              {fetchData.map((data, index) => (
                <div className="box" key={index}>
                  <h2>{data.partner_program}</h2>
                  <p>{origin}&rarr;{destination}</p>
                  <span>2024-07-09 - 2024-10-07</span>
                  <h2>{data.min_business_miles}</h2>
                  <p>Min Business Miles</p>
                  <h2>{data.min_economy_miles}</h2>
                  <p>Min Economy Miles</p>
                  <h2>N/A</h2>
                  <p>Min First Miles</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FlightBookingForm;
