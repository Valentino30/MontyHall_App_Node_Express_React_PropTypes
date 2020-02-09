import axios from "axios";
import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import CustomSwitch from "../components/CustomSwitch";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";

export default class Form extends Component {
  state = {
    cars: 0,
    simulations: "",
    switchDoor: false,
    showResult: false
  };

  handleSwitch = event => {
    this.setState({ ...this.state, switchDoor: event.target.checked });
  };

  handleChange = event => {
    console.log(typeof event.target.value);
    this.setState({
      ...this.state,
      cars: 0,
      showResult: false,
      simulations: event.target.value
    });
  };

  handleClick = () => {
    const { simulations, switchDoor } = this.state;
    if (simulations <= 1000000) {
      const api = "/api/simulation";
      const query = `?simulations=${simulations}&switchDoor=${switchDoor}`;
      const targetUrl = api + query;
      axios
        .get(targetUrl)
        .then(response => {
          const { cars } = response.data;
          this.setState({ ...this.state, cars, showResult: true });
        })
        .catch(() => alert("Something went wrong, try again"));
    } else {
      alert("Try not to run more than 1.000.000 simulations");
    }
  };

  render() {
    const result = (
      <Typography>
        You won {this.state.cars} cars out of {this.state.simulations}
      </Typography>
    );
    const { simulations, switchDoor, showResult } = this.state;
    return (
      <Container maxWidth="sm">
        <CustomTextField
          handleChange={this.handleChange}
          simulations={simulations}
        />
        <CustomSwitch
          handleSwitch={this.handleSwitch}
          switchDoor={switchDoor}
        />
        <CustomButton handleClick={this.handleClick} />
        {showResult ? result : null}
      </Container>
    );
  }
}
