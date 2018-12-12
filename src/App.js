import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import { getUsers } from "./api/mockUserApi";

class App extends Component {
  _mounted = false;
  state = {
    users: []
  };

  // Calling hard coded mock data, but the
  // data is abstracted behind an async function
  // to simulate an async call to an HTTP endpoint.
  async componentDidMount() {
    this._mounted = true;
    const users = await getUsers();
    if (this._mounted) this.setState({ users });
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
