import React, { useState } from 'react';

import './ShowElements.css';

import Button from '../UI/Button';
import Card from '../UI/Card';

const ShowElements = () => {
  const [isShown, setIsShown] = useState(false);

  const startShowHandler = () => {
    setIsShown(true);
  };

  const stopShowHandler = () => {
    setIsShown(false);
  };

  return (
    <div>
      
      {!isShown && <Button className='exampleButton' onClick={startShowHandler}>Show element</Button>}
      {isShown && <Button onClick={stopShowHandler}>Hide element</Button>}
      <br />
      <br />
      {isShown && <Card><Button type='button' onClick={stopShowHandler}>x</Button>
        <h4>Element shown</h4>
      </Card>}
    </div>
  );
};

export default ShowElements;
