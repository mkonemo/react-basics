import React, {useState} from 'react';



const Show = (props) => {
  
  const [isShown, setIsShown] = useState(false);

  const startShowHandler = () => {
    setIsShown(true);
  };

  const stopShowHandler = () => {
    setIsShown(false);
  };

  return <div>{props.children}</div>
}

export default Show;
