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
      <Props />
      <h2>Utilities</h2>
      <DateExample />
      <h3>Card container example</h3>
      <Card />
    </div>
  );
}
