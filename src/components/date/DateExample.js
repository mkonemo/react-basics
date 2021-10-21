import React from 'react';

import Card from '../UI/Card';

const DateExample = () => {
  const dateValue = new Date();
  const month = dateValue.toLocaleString('en-US', { month: 'long' });
  const year = dateValue.getFullYear();
  const day = dateValue.toLocaleString('en-US', { day: '2-digit' });
  
  const fullDate = dateValue.toLocaleString('it-IT');
const shortDate = dateValue.toLocaleString('it-IT').split(',')[0];;
  return (
    <div>
      
      <Card>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        <div>{fullDate}</div>
        <div>{shortDate}</div>
      </Card>
    </div>
  );
}

export default DateExample;
