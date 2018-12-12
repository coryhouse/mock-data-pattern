import React, { Component } from "react";
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
        <p>
          This app uses the same mock data as the storybook story and the
          automated test. For the app, the mock data is delivered via an async
          function to simulate making an async call to an API over HTTP.
        </p>

        <p>
          To see the mock data in use check four files:
          <ol>
            <li>App.js</li>
            <li>api/mockUserApi.js</li>
            <li>UserList.stories.js</li>
            <li>UserList.test.js</li>
          </ol>
        </p>

        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
