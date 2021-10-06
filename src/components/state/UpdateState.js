import React, { useState } from 'react';

import Button from '../UI/Button';
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
      <Button onClick={clickHandler}>Click</Button>
      </Card>
    </div>
  );
};

export default UpdateState;
