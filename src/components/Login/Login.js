import "./style.css";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.LogInUser = this.LogInUser.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }

  LogInUser = (e) => {
    this.setState({});
  };

  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Banana</h1>
        </header>
        <div className="App-body">
          <h3>Login</h3>

          <form className="form">
            <label> Username</label>
            <input
              className="Text-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.OnChange}
            />
            <label> Password</label>
            <input
              className="Text-input"
              type="text"
              name="password"
              placeholder="Password"
              onChange={this.OnChange}
            />
          </form>

          <button
            type="submit"
            value="Login"
            className="Button"
            onClick={() => this.LogInUser()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
