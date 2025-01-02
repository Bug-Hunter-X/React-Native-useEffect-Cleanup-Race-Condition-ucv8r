// useEffectSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (mounted) {
        setData('Data fetched!');
      }
    };
    fetchData();

    return () => {
      setMounted(false); // prevent further changes to state
    };
  }, []);

  return (
    <div>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;