import React from "react";
import PropTypes from "prop-types";

import { TextField, Snackbar, IconButton, Button } from "@material-ui/core/";

import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      open: true
    };
  }

  handleField = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  handleForm = () => {
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span>Mensagem aqui</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />

        <h1>Login</h1>
        <form>
          <TextField
            id="username"
            label="User"
            onChange={e => this.handleField(e)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            onChange={e => this.handleField(e)}
          />
          <Button round color="primary" type="button"  onClick={this.handleForm}>
          Entrar
          </Button>
        </form>
        <CircularProgress />
      </div>
    );
  }
}

export default Login;
