import React, { useState } from 'react';
import RandomAirline from './RandomAirline';
import { getAllData } from '../AirService';

const FlightBookingForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cabin, setCabin] = useState('economy');
  const [submitted, setSubmitted] = useState(false);
  const [randomAirline, setRandomAirline] = useState('');
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

  const handleRandomPartnerChange = (partner) => {
    setRandomAirline(partner);
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
        {submitted && <RandomAirline onRandomPartnerChange={handleRandomPartnerChange} />}
        {submitted && (
          <>
            <div className="results">
              {fetchData.map((data) => (
                <div className="box" key={data.id}>
                  <h3>{data.partnerProgram.join(', ')}</h3>
                  <h2>{randomAirline}</h2>
                  <span>{origin}&rarr;{destination}</span>
                  <p>{data.departure}&rarr;{data.arrival}</p>
                  <h2>144600</h2>
                  <p>Min Business Miles</p>
                  <h2>55200</h2>
                  <p>Min Economy Miles</p>
                  <h1>N/A</h1>
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
