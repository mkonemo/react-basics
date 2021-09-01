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

      <h4>props.children</h4>
      <pre>children</pre> is a reserved name

and the value of this special children prop

will always be the content

between the opening and closing tags

of your custom component.<br />
For an example look at the Card component in UI.
    </div>
  );
}

export default Props;
