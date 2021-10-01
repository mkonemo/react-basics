import React, { useState } from 'react';


const SwitchTheme = (props) => {

  const [altTheme, setAltTheme] = useState(props.altTheme);
  const changeThemeHandler = () => {
    setAltTheme(!altTheme);
  };

  return (
    <button className="btn-theme" title="Switch color theme" onClick={changeThemeHandler}>
          <i class="fas fa-adjust"></i>
        </button>
  )
}

export default SwitchTheme;
