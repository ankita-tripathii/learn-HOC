import React, { useState, useEffect } from 'react';

const useSquareNumber = (N) => {
  const [loading, setLoading] = useState(true);
  const [square, setSquare] = useState(null);

  useEffect(() => {
    let cache = localStorage.getItem(`square_${N}`);

    if (cache) {
      setSquare(parseInt(cache));
      setLoading(false);
    } else {
      setTimeout(() => {
        const squareResult = N * N;
        setSquare(squareResult);
        setLoading(false);
        localStorage.setItem(`square_${N}`, squareResult);
      }, 2000); // Simulating asynchronous operation with setTimeout
    }
  }, [N]);

  return { loading, square };
};

const SquareComponent = () => {
  const [number, setNumber] = useState('');
  const { loading, square } = useSquareNumber(number);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {number ? `The square of ${number} is ${square}` : 'Enter a number'}
        </p>
      )}
    </div>
  );
  }





export default SquareComponent;
