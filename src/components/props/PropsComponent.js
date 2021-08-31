import React from 'react';

function PropsComponent(props) {
  return (
    <div className='card'>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default PropsComponent;
