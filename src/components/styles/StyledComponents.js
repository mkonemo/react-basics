import React, { useState } from 'react';

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
        By default, CSS files are not scoped into the app: any css added to a
        single component would affect all other components. To introduce scoped
        styles into the app there are two different approaches.
      </p>
      <h4>Styled components</h4>
      <p>
        <a href="www.styled-components.com">www.styled-components.com</a>
      </p>
      <Card>
        <p>The following code shows a peculiar syntax, called <em>"Attacked template literal"</em></p>
        <samp>
          import styled from 'styled-components' 
          const Button = styled.button``;
        </samp>
      </Card>
    </div>
  );
};

export default StyledComponents;
