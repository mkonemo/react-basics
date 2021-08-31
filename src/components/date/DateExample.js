import React from 'react';

function DateExample() {
  const dateValue = new Date();
  const month = dateValue.toLocaleString('en-US', { month: 'long' });
  const year = dateValue.getFullYear();
  const day = dateValue.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div>
      <h3>Date formatting</h3>
      <div className="card">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    </div>
  );
}

export default DateExample;
