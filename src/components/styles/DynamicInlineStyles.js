import React, {useState} from 'react';

import Card from '../UI/Card';

const DynamicInlineStyles = () => {

  const [isValid, setIsValid] = useState(true);
  let variable = isValid.toString();

  return (
    <div>
      <Card><p>isValid = '{variable}'</p></Card>
      <button>Change isValid</button>
    </div>
  );
};

export default DynamicInlineStyles;