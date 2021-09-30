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
        <i class="fab fa-react"></i> React - A quick reference
      </h1>
      <div className="grid-container">
        <div className="grid-container__item">
          <div className="box item1">
            <h2>
              <i class="fas fa-code"></i> Basics
            </h2>

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
                <Show title="Controlled component">
                  <p>
                    A controlled component is a normal component. The
                    peculiarity is that in that case there is a value handled by
                    its parent component. Both the value, as well as changes to
                    the value are not handled in the component itself but in a
                    parent component.
                  </p>
                </Show>
              </li>
            </ol>
          </div>

          <div className="box item2">
            <h2>
              <i class="fab fa-css3"></i> Styles
            </h2>

            <ol>
              <li>
                <Show title="Dynamic inline styles">
                  <Props />
                </Show>
              </li>
              <li>
                <Show title="Dynamic CSS classes">
                  <Props />
                </Show>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid-container__item">
          <div className="box item3">
            <h2>
              <i class="fas fa-toolbox"></i> Utilities
            </h2>

            <ol>
              <li>
                <Show title="Firebase storage">
                  <p>
                    A storage for images and other files is available
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
                <Show title="Date formatting">
                  <DateExample />
                </Show>
              </li>
              <li>
                <Show title="Custom HTML element: Card container example">
                  <p>
                    This is a custom HTML element, built as a component and used
                    as a shared container.
                  </p>
                  <Card>
                    See
                    <pre>
                      <code>./components/UI/Card.js</code>
                    </pre>{' '}
                    for an example
                  </Card>
                </Show>
              </li>
              <li>
                <Show title="Add simple event on click button">
                  <ClickEvent />
                </Show>
              </li>
              <li>
                <Show title="useState update example">
                  <UpdateState variable="Initial value" />
                </Show>
              </li>
              <li>
                <Show title="Import data from external JSON file">
                  <Json />
                </Show>
              </li>
              <li>
                <Show title="Rendering lists of data">
                  <Datalist />
                </Show>
              </li>
              <li>
                <Show title="Conditional content">
                  <ConditionalContent />
                </Show>
              </li>
              <li>
                <Show title="Show elements">
                  <ShowElements />
                </Show>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
