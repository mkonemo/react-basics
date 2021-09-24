import React, { useState } from 'react';

import Card from '../UI/Card';

const ShowElements = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h3>Show elements</h3>
      <button>Show element</button>
      <br />
      <br />
      <Card>
        <h4>Element shown</h4>
      </Card>
    </div>
  );
};

export default ShowElements;
