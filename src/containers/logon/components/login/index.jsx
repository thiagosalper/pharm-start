import React from "react";
import PropTypes from "prop-types";

// REDUX 
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {loginAction} from '../../redux/logonActions';

// MATERIAL 
import { TextField, Snackbar, IconButton, Button, CircularProgress } from "@material-ui/core/";

// ICONS
import CloseIcon from "@material-ui/icons/Close";

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
    const {loginAction} = this.props;
    const {username, password} = this.state;

    loginAction(username, password);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {loadingLogin} = this.props;
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
        {(loadingLogin)?<CircularProgress />:null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    loadingLogin: store.logon.loadingLogin
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loginAction
  }, 
  dispatch
)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);