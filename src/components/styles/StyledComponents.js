import React, {useState} from 'react';

import Card from '../UI/Card';


import './StyledComponents.css';

const StyledComponents = () => {
  const [isValid, setIsValid] = useState(true);

  const stateChangeHandler = () => {
    setIsValid(!isValid);
  };
  let variable = isValid.toString();
  return (
    <div>
      <p>
        By default, CSS files are not scoped into the app: any css added to a single component would affect all other components. To introduce scoped styles into the app there are two different approaches.
      </p>
      <h4>Styled components</h4>
      <a href="www.styled-components.com">www.styled-components.com</a>
      <Card>
        <samp style={{ color: isValid ? 'olive' : 'orange' }}>
          isValid = '{variable}'
        </samp>
        <br />
        <br />
        <button onClick={stateChangeHandler}>Change isValid</button>
      </Card>
    </div>
  );
};

export default StyledComponents;
