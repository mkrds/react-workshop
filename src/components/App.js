import React, { Component } from "react";
import TweetInput from "./TweetInput";
import TweetsList from "./TweetsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      tweets: []
    };
  }

  handleTextFieldChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  handleAddTweet = e => {
    e.preventDefault();
    const newTweet = {
      name: this.state.name,
      content: this.state.content,
      date: new Date().toUTCString()
    };
    const newTweets = [...this.state.tweets, newTweet];
    this.setState({ tweets: newTweets, name: "", content: "" });
  };

  render() {
    return (
      <main>
        <div className="jumbotron">
          <div className="container">
            <TweetInput
              handleTextFieldChange={this.handleTextFieldChange}
              handleAddTweet={this.handleAddTweet}
              name={this.state.name}
              content={this.state.content}
            />
          </div>
        </div>
        <TweetsList tweets={this.state.tweets} />
      </main>
    );
  }
}

export default App;
