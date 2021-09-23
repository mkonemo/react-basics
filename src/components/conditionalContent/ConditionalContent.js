import React from 'react';

import Card from '../UI/Card';

const ConditionalContent = () => {
  return (
    <div>
      <h3>Conditional content (3 different examples)</h3>
      <Card>
        <pre><code>let conditionalContent = &lt;p&gt;Default content&lt;/p&gt;
          if (condition = true) &lbrace;
            conditionalContent = &lt;p&gt;Content if condition is true&lt;/p&gt;
          &rbrace;
        </code></pre>
      </Card>
    </div>
  );
};

export default ConditionalContent;
