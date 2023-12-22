import React, { useState, useEffect } from 'react';
import exampleDataList from './horoscope.json'; 
import './horoscope.css';

const ApiComponent: React.FC = () => {
  const [dataList, setDataList] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataList(exampleDataList);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="horoscope-container">
      {dataList ? (
        <div>
          {dataList.map((horoscope, index) => (
            <div key={index} className="horoscope-item">
              <img src={horoscope.image_url} alt={horoscope.sign} className="sign-image" />
              <h2>{horoscope.sign}</h2>
              <p>{horoscope.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ApiComponent;