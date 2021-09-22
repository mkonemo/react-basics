import React from 'react';

import Card from '../UI/Card';

const DataList = (props) => {
  

  return (
    <div>
      <h3>Rendering lists of data</h3>
      <Card>
        <ul>
          
        {props.items.map(expense => (
          <li>
            {expense.title}
            {expense.amount}
            {expense.date}
          </li>
        ))}
        </ul>
      </Card>
    </div>
  );
};

export default DataList;
