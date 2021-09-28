import React, { useState } from 'react';

import PropsComponent from './PropsComponent';

const Props = () => {  

  const exampleProps = [
    { title: 'Example title', desc: 'Example description' },
  ];
  return (
    <div>
      
      
        <p>
          Props are "custom HTML properties" defined in a root element, and
          passed to its descendant components.
        </p>
        <PropsComponent
          title={exampleProps[0].title}
          description={exampleProps[0].desc}
        />
        <p>
          <pre>children</pre> is a reserved name and the value of this special
          children prop will always be the content between the opening and
          closing tags of your custom component.
          <br />
          For an example look at the Card component in UI.
        </p>
    </div>
  );
};

export default Props;
