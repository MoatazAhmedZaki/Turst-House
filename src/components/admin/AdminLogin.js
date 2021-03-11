import React, { Component } from "react";
import { Container, Col, Row } from "react-materialize";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../globalState/actions/authActions";
import { withRouter } from "react-router-dom";
class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      isLoggedIn: false,
      hidden: true
    };
  }
  onLogin = e => {
    e.preventDefault();
    this.props.login({ password: this.state.password }, this.props.history);
    this.setState({ hidden: false });

    setTimeout(() => {
      this.setState({ hidden: true });
    }, 20000);
  };

  OnEnterPassword = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/admin/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isLoggedIn) {
      this.props.history.push("/admin/dashboard");
    }
  }
  render() {
    return (
      <div className="adminregister">
        <Container>
          <form className="adminregisterform">
            <Row>
              <Col m={3} />
              <Col s={12} m={6}>
                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    value={this.state.password}
                    onChange={this.OnEnterPassword}
                    name="password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                {this.state.password === "trust_house_2019" ? (
                  <div hidden={this.state.hidden} className="modal-dialogg ">
                    <p id="snackbarr">Logged In successfully</p>
                  </div>
                ) : (
                  <div hidden={this.state.hidden} className="modal-dialogg ">
                    <p id="snackbarr">Password Is Wrong</p>
                  </div>
                )}
              </Col>

              <Col m={3} />
            </Row>

            <Col s={12} className="center">
              <button
                type="submit"
                className="btn card-btn"
                onClick={this.onLogin}
              >
                Login
              </button>
            </Col>
          </form>
        </Container>
      </div>
    );
  }
}

AdminLogin.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { login }
)(withRouter(AdminLogin));
