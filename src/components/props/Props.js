import React, { useState } from 'react';

import PropsComponent from './PropsComponent';

const Props = () => {
  const [isShown, setIsShown] = useState(false);

  const startShowHandler = () => {
    setIsShown(true);
  };

  const stopShowHandler = () => {
    setIsShown(false);
  };

  const exampleProps = [
    { title: 'Example title', desc: 'Example description' },
  ];
  return (
    <div>
      <h3>
        Props example{' '}
        {!isShown && <button onClick={startShowHandler}>+</button>}
        {isShown && <button onClick={stopShowHandler}>-</button>}
      </h3>
      {isShown && (
        <p>
          Props are "custom HTML properties" defined in a root element, and
          passed to its descendant components.
        </p>
      )}
      {isShown && (
        <PropsComponent
          title={exampleProps[0].title}
          description={exampleProps[0].desc}
        />
      )}

      {isShown && <h4>props.children</h4>}
      {isShown && (
        <p>
          <pre>children</pre> is a reserved name and the value of this special
          children prop will always be the content between the opening and
          closing tags of your custom component.
          <br />
          For an example look at the Card component in UI.
        </p>
      )}
    </div>
  );
};

export default Props;
