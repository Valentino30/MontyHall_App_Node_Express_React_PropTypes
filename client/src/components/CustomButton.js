import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    width: "50%"
  }
}));

export default function CustomButton(props) {
  const classes = useStyles();

  return (
    <Button
      color="primary"
      variant="contained"
      className={classes.button}
      onClick={props.handleClick}
      endIcon={<Icon>send</Icon>}
    >
      Run Smulaitons
    </Button>
  );
}

CustomButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};
