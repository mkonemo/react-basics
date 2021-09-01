import React from 'react';

import PropsComponent from './PropsComponent';

function Props() {
  const exampleProps = [
    { title: 'Example title', desc: 'Example description' }
  ];
  return (
    <div>
      <h3>Props example</h3>
      <p>
        Props are "custom HTML properties" defined in a root element, and passed
        to its descendant components.
      </p>
      <PropsComponent
        title={exampleProps[0].title}
        description={exampleProps[0].desc}
      />
    </div>
  );
}

export default Props;
