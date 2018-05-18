import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount = event => {
    const token = localStorage.getItem("token");
    const authToken = `${token}`;
    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };
    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        this.props.history.push("/");
      });
  };

  signout() {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => (
            <div key={`${joke.id}${joke.setup}${joke.punchline}`}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))}
        </ul>
        <div>
          <Link to='/'>
            <button onClick={this.signout}>Sign Out</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Jokes;
