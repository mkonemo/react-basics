import React, { useState } from 'react';

import Card from '../UI/Card';

const UpdateState = (props) => {
  const [value, setValue] = useState(props.variable);

  const clickHandler = () => {
    setValue('Updated value!');
  };

  return (
    <div>
      
      <Card>
      <p>
        Click button to update:
        <br /> <em>{value}</em>
      </p>
      <button onClick={clickHandler}>Click</button>
      </Card>
    </div>
  );
};

export default UpdateState;
