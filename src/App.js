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
      <h2><i class="fab fa-react"></i> Basics</h2>
      <Show>
        <ol>
          <li>
            <Show title="Props example">
              <Props />
            </Show>
          </li>
          <li>
            <Show title="Composition">
              <p>
                Generally, the approach of building a user interface from
                smaller building blocks is called composition.
              </p>
            </Show>
          </li>
          <li>
            <Show title="State and React hooks">
              <UseStateDefinition />
            </Show>
          </li>
          <li>
            <Show title="Lifting State Up">
              <LiftingStateUp onInputText={inputTextHandler} />
            </Show>
          </li>
          <li>
            <Show title='Controlled component'>
              <p>
                A controlled component is a normal component. The peculiarity is
                that in that case there is a value handled by its parent
                component. Both the value, as well as changes to the value are
                not handled in the component itself but in a parent component.
              </p>
            </Show>
          </li>
        </ol>
      </Show>
      <h2><i class="fas fa-toolbox"></i> Utilities</h2>
      <Show>
        <ol>
          <li>
            <Show title='Firebase storage'>
              <p>
                A storage for images and other files is available{' '}
                <a
                  href="https://console.firebase.google.com/u/0/project/reacttest-8afe6/storage/reacttest-8afe6.appspot.com/files/~2F"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </Show>
          </li>
          <li>
            <Show title='Date formatting'>
              <DateExample />
            </Show>
          </li>
          <li>
            <Show title='Custom HTML element: Card container example'>
              <p>
                This is a custom HTML element, built as a component and used as
                a shared container.
              </p>
              <Card>
                See{' '}
                <pre>
                  <code>./components/UI/Card.js</code>
                </pre>{' '}
                for an example
              </Card>
            </Show>
          </li>
          <li>
            <Show title='Add simple event on click button'>
              <ClickEvent />
            </Show>
          </li>
          <li>
            <Show title='useState update example'>
              <UpdateState variable="Initial value" />
            </Show>
          </li>
          <li>
            <Show title='Import data from external JSON file'>
              <Json />
            </Show>
          </li>
          <li>
            <Show title='Rendering lists of data'>
              <Datalist />
            </Show>
          </li>
          <li>
            <Show title='Conditional content'>
              <ConditionalContent />
            </Show>
          </li>
          <li>
            <Show title='Show elements'>
              <ShowElements />
            </Show>
          </li>
        </ol>
      </Show>
    </div>
  );
};
export default App;
