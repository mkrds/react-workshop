import React from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";

const propTypes = {
  tweets: PropTypes.array
};

function TweetsList({ tweets }) {
  const allTweets = () =>
    tweets.map(t => (
      <Tweet
        key={t.id}
        name={t.name}
        date={t.date}
        content={t.content}
        id={t.id}
      />
    ));

  return <div className="container">{allTweets()}</div>;
}

TweetsList.propTypes = propTypes;
export default TweetsList;
