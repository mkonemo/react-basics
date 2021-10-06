import React, { useState } from 'react';

import Button from '../UI/Button';
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
        Styled components are imported from a library, which can be found at the
        following link:
        <br />
        <a href="www.styled-components.com">www.styled-components.com</a>
      </p>
      <p>The style is defined in a component, and the component can be imported and used into other components, like in the following example.</p>
      <p><strong>Please note:</strong> For more details and examples refer to the documentation on <a href="www.styled-components.com">this site</a>.</p>
      <Card>
        <p>
          The following code shows a peculiar syntax, called{' '}
          <em>"Attacked template literal"</em>
        </p>
        <samp>
          import styled from 'styled-components' const Button = styled.button`
          font: inherit; padding: 0.5rem 1.5rem; border: 1px solid #8b005d;
          color: white; background: #8b005d; box-shadow: 0 0 4px rgba(0, 0, 0,
          0.26); cursor: pointer; `;
        </samp>
        <p>
          <Button>Styled button example</Button>
        </p>
        <p>
          <Button primary>Primary button example</Button>
        </p>
      </Card>
    </div>
  );
};

export default StyledComponents;
