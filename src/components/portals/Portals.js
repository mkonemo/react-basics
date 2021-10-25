import React from 'react';

const Portals = () => {
  return (
    <React.Fragment>
      <h4>Fragments</h4>
      <h4>Portals</h4>
      <p>
        Portals allow to put some element into a specific component, but then
        render it in a different position in the final HTML file (es. overlays,
        menu, etc.)
      </p>
      <h4>Refs</h4>
      <p>Refs allow to get access to other DOM elements</p>
      <p>
        With refs, we can set up a connection between a HTML element which is
        being rendered in the end and our other JavaScript code.
      </p>
    </React.Fragment>
  );
};

export default Portals;
