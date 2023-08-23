import React, { Component } from "react";
import "./App.css";
import { people } from "./people";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: people,
      visibleFriends: {}
    };
  }

  toggleFriendVisibility = (friendKey) => {
    this.setState((prevState) => ({
      visibleFriends: {
        ...prevState.visibleFriends,
        [friendKey]: !prevState.visibleFriends[friendKey]
      }
    }));
  };

  render() {
    const { friends, visibleFriends } = this.state;

    return (
      <div className="App">
        <h1>Welcome to Friends!</h1>
        <button onClick={this.toggleFriendVisibility.bind(this, "all")}>
          {Object.values(visibleFriends).every((value) => value)
            ? "Hide All"
            : "Reveal All"}
        </button>
        {friends.map((friend) => (
          <div
            key={friend.key}
            onClick={() => this.toggleFriendVisibility(friend.key)}
            className={`friend-box ${
              visibleFriends[friend.key] ? "visible" : ""
            }`}
          >
            {visibleFriends[friend.key] ? friend.first_name : "reveal"}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
