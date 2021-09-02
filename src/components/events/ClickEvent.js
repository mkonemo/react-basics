import React from 'react';
import Card from '../UI/Card';

import './ClickEvent.css';

const ClickEvent = () => {
  const clickHandler = () => {
    console.log('Clicked');    
  }
  return (
    <div>
      <h3>Add simple event on click button</h3>
    <Card>
      <p>Click button to get an event on console log.</p>
      <button onClick={clickHandler}>Click</button>
    </Card>
    </div>
  );
}

export default ClickEvent;