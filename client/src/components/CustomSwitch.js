import React from "react";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel } from "@material-ui/core";

export default function CustomSwitch(props) {
  return (
    <FormControlLabel
      labelPlacement="top"
      control={
        <Switch
          color="primary"
          value="checkedB"
          checked={props.switchDoor}
          onChange={props.handleSwitch}
        />
      }
      label="Would you like to switch door?"
    />
  );
}

CustomSwitch.propTypes = {
  switchDoor: PropTypes.bool.isRequired,
  handleSwitch: PropTypes.func.isRequired
};
