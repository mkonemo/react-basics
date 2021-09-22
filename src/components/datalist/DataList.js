import React from 'react';

import Card from '../UI/Card';

const DataList = (props) => {
  
  const sampleData = [
    {
      firstName: 'Mko',
      lastName: 'Nemo',
      age: 48
    },
    {
      firstName: 'MIrko',
      lastName: 'Niciarelli',
      age: 48,
      info:
        'Lorem Ipsum'
    }
  ];

  

  const sampleExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14).toDateString()
    },
    {
      id: 'e2',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12).toDateString()
    }
  ];

  const sampleJson = fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json));

  return (
    <div>
      <h3>Rendering lists of data</h3>
      <Card>
        <ul>
          
        {sampleData.map(item => (
          <li>
            {item.firstName} {item.lastName}, ({item.age} anni).<br/>{item.info}
          </li>
        ))}
        </ul>
      </Card>
      <Card>
        <ul>
        {sampleExpenses.map(expense => (
          <li>
            {expense.title} {expense.amount}&euro;, ({expense.date})
          </li>
        ))}
        
        </ul>
      </Card>
      <li>{sampleJson.title}</li>
      <Card>
        </Card>
    </div>
  );
};

export default DataList;
