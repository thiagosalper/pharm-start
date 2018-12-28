import React from "react";
import PropTypes from "prop-types";

import { Button, Radio } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <TextField
          id="username"
          label="User"
          onChange={e => this.handleField(e)}
        />
        <TextField
          id="email"
          label="E-mail"
          onChange={e => this.handleField(e)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          onChange={e => this.handleField(e)}
        />
        <TextField
          id="password2"
          label="Repeat Password"
          type="password"
          onChange={e => this.handleField(e)}
        />
        <TextField
          id="pharmacy"
          label="Pharmacy"
          onChange={e => this.handleField(e)}
        />

        <Radio
          checked={false}
          onChange={this.handleChange}
          value="terms"
          name="terms"
        />
        <span>
          Eu concordo com os <a href="#termos">Termos e Condições</a>.
        </span>

        <Button variant="contained" color="primary">
          Criar conta
        </Button>
      </div>
    );
  }
}

export default Register;
