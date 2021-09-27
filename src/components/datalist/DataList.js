import React, { Component } from 'react';

import Card from '../UI/Card';

const DataList = (props) => {
  const sampleData = [
    {
      id: 'i1',
      firstName: 'Mko',
      lastName: 'Nemo',
      age: 48,
    },
    {
      id: 'i2',
      firstName: 'MIrko',
      lastName: 'Niciarelli',
      age: 48,
      info: 'Lorem Ipsum',
    },
  ];

  const sampleExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14).toLocaleString('it-IT'),
    },
    {
      id: 'e2',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12).toDateString(),
    },
  ];

  return (
    <div>
      
      <Card>
        <ul>
          {sampleData.map((item) => (
            <li key={item.id}>
              {item.firstName} {item.lastName}, ({item.age} anni).
              <br />
              {item.info}
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <ul>
          {sampleExpenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} {expense.amount}&euro;, ({expense.date})
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <strong>Please note:</strong> React needs an index to identify the
        specific elements rendered on the list, so you need to add the "key"
        prop to each rendered element, with a unique value.
        <br />
        Usually you can use an element id or a random number.
      </Card>
    </div>
  );
};

export default DataList;
