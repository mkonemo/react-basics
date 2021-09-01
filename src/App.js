import React from 'react';
import Card from './components/UI/Card';

import Props from './components/props/Props';
import DateExample from './components/date/DateExample';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>React</h1>
      <h2>Basics</h2>
      <ol>
        <li>
          <Props />
        </li>
        <li>
          <h3>Composition</h3>
          <p>
            Generally, the approach of building a user interface from smaller
            building blocks is called composition.
          </p>
        </li>
      </ol>
      <h2>Utilities</h2>
      <ol>
        <li>
          <DateExample />
        </li>
        <li>
          <h3>Custom HTML element: Card container example</h3>
          <p>This is a custom HTML element, built as a component and used as a shared container.</p>
          <Card>
             See{' '}
            <pre>
              <code>./components/UI/Card.js</code>
            </pre>{' '}
            for an example
          </Card>
        </li>
      </ol>
    </div>
  );
}
