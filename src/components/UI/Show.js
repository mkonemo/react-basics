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
      {!isShown && <h3 onClick={startShowHandler}>{props.title}</h3>}
      {!isShown && <button className='btnShow' onClick={startShowHandler}><i class="fas fa-chevron-down"></i></button>}
      {isShown && <h3 onClick={stopShowHandler}>{props.title}</h3>}
      {isShown && <button className='btnShow' onClick={stopShowHandler}><i class="fas fa-chevron-up"></i></button>}
      {isShown && props.children}
    </div>
  );
};

export default Show;
