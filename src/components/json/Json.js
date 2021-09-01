
import React from 'react';
import Card from '../UI/Card';

import sampleData from './sample.js';

const Json = () => {
  
    return (
      
      <div>
        <h3>Import data from external JSON file</h3>
        {sampleData.map((item, i) => {
          return (
            <Card>
              <h4>
                {' '}
                My Name is {item.firstName} {item.lastName} and my age is{' '}
                {item.age}.
              </h4>
            </Card>
          );
        })}
      </div>
    );
  
}
export default Json;