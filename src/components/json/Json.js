
import React from 'react';
import Card from '../UI/Card';

import sampleData from './sample.js';

const Json = () => {
  
    return (
      
      <div>
        
        {sampleData.map((item, i) => {
          return (
            <Card>
              <p>
                
                My Name is {item.firstName} {item.lastName} and my age is {item.age}. <br /> {item.info}
              </p>
            </Card>
          );
        })}
      </div>
    );
  
}
export default Json;