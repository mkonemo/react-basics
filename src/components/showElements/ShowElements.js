import React, { useState } from 'react';

import Card from '../UI/Card';

const ShowElements = () => {
  const [isShown, setIsShown] = useState(false);

  const ShowHandler = () => {
    console.log('1' + isShown);

    isShown = true ? (isShown = false) : (isShown = true);

    console.log('2' + isShown);
  };

  return (
    <div>
      <h3>Show elements</h3>
      {!isShown && <button onClick={ShowHandler}>Show element</button>}
      {isShown && <button onClick={ShowHandler}>Hide element</button>}
      <br />
      <br />
      <Card>
        <h4>Element shown</h4>
      </Card>
    </div>
  );
};

export default ShowElements;
