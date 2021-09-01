import React from 'react';
import Card from './components/UI/Card';

import Props from './components/props/Props';
import DateExample from './components/date/DateExample';
import Json from './components/json/Json';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>React <img src='https://firebasestorage.googleapis.com/v0/b/reacttest-8afe6.appspot.com/o/logo192.png?alt=media&token=12a771cc-74f0-4e5c-9545-31b7a35ad484' /></h1>
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
        <li><h3>Firebase storage</h3>
        <p>A storage for images and other files is available <a href="https://console.firebase.google.com/u/0/project/reacttest-8afe6/storage/reacttest-8afe6.appspot.com/files/~2F" target="_blank">here</a></p></li>
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
        <li>
          <Json />
        </li>
        <li>test</li>
      </ol>
    </div>
  );
}
export default App;