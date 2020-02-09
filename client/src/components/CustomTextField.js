import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  TextField: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(30),
    width: "50%"
  }
}));

export default function CustomTextField(props) {
  const classes = useStyles();
  console.log(TextField.value)
  return (
    <TextField
      type="number"
      variant="outlined"
      label="Simulations"
      id="outlined-number"
      value={props.simulations}
      className={classes.TextField}
      onChange={props.handleChange}
      InputLabelProps={{ shrink: true }}
    />
  );
}

CustomTextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  simulations: PropTypes.string.isRequired
};
