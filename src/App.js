import React, { useState } from 'react';
import Card from './components/UI/Card';
import Show from './components/UI/Show';


import Props from './components/props/Props';
import UseStateDefinition from './components/state/UseStateDefinition';
import LiftingStateUp from './components/state/LiftingStateUp';

import DateExample from './components/date/DateExample';
import Json from './components/json/Json';
import ClickEvent from './components/events/ClickEvent';
import UpdateState from './components/state/UpdateState';
import Datalist from './components/datalist/DataList';
import ConditionalContent from './components/conditionalContent/ConditionalContent';
import ShowElements from './components/showElements/ShowElements';

import './style.css';

const App = () => {
  const inputTextHandler = (inputText) => {
    console.log(inputText);
  };

  

  return (
    <div>
      <h1>
        React{' '}
        <img src="https://firebasestorage.googleapis.com/v0/b/react-basics-2ff51.appspot.com/o/logo192.png?alt=media&token=a484171c-797a-4a94-a7f7-ee9cb914a2e3" />
      </h1>
      <h2>Basics</h2>
      <ol>
        <li>
          <Props />
        </li>
        <li>
          <h3>Composition</h3>
          <Show><p>
            Generally, the approach of building a user interface from smaller
            building blocks is called composition.
          </p></Show>
          )
        </li>
        <li>
          <Show><UseStateDefinition /></Show>
        </li>

        <li>
          <LiftingStateUp onInputText={inputTextHandler} />
        </li>
        <li>
          <h3>Controlled component</h3>
          <p>
            A controlled component is a normal component. The peculiarity is
            that in that case there is a value handled by its parent component.
            Both the value, as well as changes to the value are not handled in
            the component itself but in a parent component.
          </p>
        </li>
      </ol>
      <h2>Utilities</h2>
      <ol>
        <li>
          <h3>Firebase storage</h3>
          <p>
            A storage for images and other files is available{' '}
            <a
              href="https://console.firebase.google.com/u/0/project/reacttest-8afe6/storage/reacttest-8afe6.appspot.com/files/~2F"
              target="_blank"
            >
              here
            </a>
          </p>
        </li>
        <li>
          <DateExample />
        </li>
        <li>
          <h3>Custom HTML element: Card container example</h3>
          <p>
            This is a custom HTML element, built as a component and used as a
            shared container.
          </p>
          <Card>
            See{' '}
            <pre>
              <code>./components/UI/Card.js</code>
            </pre>{' '}
            for an example
          </Card>
        </li>
        <li>
          <ClickEvent />
        </li>
        <li>
          <UpdateState variable="Initial value" />
        </li>
        <li>
          <Json />
        </li>
        <li>
          <Datalist />
        </li>
        <li>
          <ConditionalContent />
        </li>
        <li>
          <ShowElements />
        </li>
      </ol>
    </div>
  );
};
export default App;
