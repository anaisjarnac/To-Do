import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChange}
        name="checked"
        style={{ 
          color: "#E0766F"
          }}
      />
    </div>
  );
}