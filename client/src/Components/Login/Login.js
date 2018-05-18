import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitLoginHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        localStorage.removeItem("token");
      });
  };

  render() {
    return (
      <form>
        <div>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.inputHandler}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.inputHandler}
            placeholder="Password"
          />
        </div>
        <div>
          <Link to='/jokes'>
            <button onClick={this.submitLoginHandler}>Login</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Login;
