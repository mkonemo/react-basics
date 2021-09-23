import React from 'react';

import Card from '../UI/Card';

const ConditionalContent = () => {
  return (
    <div>
      <h3>Conditional content</h3>
      <h4>Exemple #1</h4>
      <Card className='codeBlock'>
        <pre><code>
          {`
          let conditionalContent = <p>Default content</p>
          if (condition = true) {
            conditionalContent = <p>Content if condition is true</p>
          }
          `}
        </code></pre>
      </Card>
      <h4>Exemple #2</h4>
      <Card className='codeBlock'>
        <pre><code>
          {`
          {condition = true ? <p>Content if true</p> : <p>Content if false</p>}
          `}
        </code></pre>
      </Card>
      <h4>Exemple #3</h4>
      <Card className='codeBlock'>
        <pre><code>
          {`
          {condition = true && <p>Content if true</p>}
          {condition = false && <p>Content if false</p>}
          `}
        </code></pre>
      </Card>
    </div>
  );
};

export default ConditionalContent;
