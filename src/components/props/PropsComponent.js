import React from 'react';
import Card from '../UI/Card';
const PropsComponent = (props) => {
  return (
    <Card>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </Card>
  );
}

export default PropsComponent;
