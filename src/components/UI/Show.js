import React, { useState } from 'react';
import './Show.css';


const Show = (props) => {
  const [isShown, setIsShown] = useState(false);

  const startShowHandler = () => {
    setIsShown(true);
  };

  const stopShowHandler = () => {
    setIsShown(false);
  };

  return (
    <div>
      {!isShown && <button onClick={startShowHandler}>+</button>}
      {isShown && <button onClick={stopShowHandler}>-</button>}
      {isShown && props.children}
    </div>
  );
};

export default Show;
