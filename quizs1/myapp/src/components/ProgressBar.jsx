import React, { useState } from 'react';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
    setPercentage(value);
  };

  return (
    <div className="progress-container">
      <h2>Progress Bar</h2>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <span className="progress-label">{percentage}%</span>
        </div>
      </div>
      <div className="input-container">
        <label>Input Percentage: </label>
        <input
          type="number"
          value={percentage}
          onChange={handleInputChange}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
