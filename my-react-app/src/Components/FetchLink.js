import React, { useState, useEffect } from 'react';

const FetchLink = () => {
  const [data, setData] = useState(null);
  const APILINK = 'https://api.animethemes.moe/animetheme?sort=random&include=song,anime,animethemeentries.videos';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APILINK);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default FetchLink;