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
      .then(response => {
        this.setState({ jokes: response.data });
      })
      .catch(error => {
        // console.log("wheres ma token");
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => <li key={joke._id}> {joke.username}</li>)}
        </ul>
        <div>
          <Link to='/login'>
            <button OnClick={this.signout}>Sign Out</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Jokes;
