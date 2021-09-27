import React, { useState } from 'react';

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
      <h3>Show elements</h3>
      {!isShown && <button onClick={startShowHandler}>Show element</button>}
      {isShown && <button onClick={stopShowHandler}>Hide element</button>}
      <br />
      <br />
      {isShown && <Card><button type='button' onClick={stopShowHandler}>x</button>
        <h4>Element shown</h4>
      </Card>}
    </div>
  );
};

export default ShowElements;
