import React from 'react';

import Card from '../UI/Card';


const CSSModules = () => {
  return (
    <div>
      <p>
        CSS modules are an alternative to Styled Components to manage scoped
        styles.
      </p>
      <p>CSS modules automatically generate unique custom classes, so each CSS is specific to the component where it is defined.</p>
      <p>In order to implement them you need to name the the CSS file like <samp>style.module.css</samp> and import it with a specific syntax.</p>
      <Card>
        <p>This is the syntax to import a CSS module:</p>
        <samp>import styles from './Button.module.css';</samp>
        
      </Card>
    </div>
  );
};

export default CSSModules;
