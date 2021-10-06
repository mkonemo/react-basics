import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import './ClickEvent.css';

const ClickEvent = () => {
  const clickHandler = () => {
    console.log('Clicked');    
  }
  return (
    <div>
      
    <Card>
      <p>Click button to get an event on console log.</p>
      <Button onClick={clickHandler}>Click</Button>
    </Card>
    </div>
  );
}

export default ClickEvent;