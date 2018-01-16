import React from "react";
import PropTypes from "prop-types";
import "./Tweet.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

function Tweet({ name, date, content }) {
  return (
    <div className="Tweet card">
      <div className="card-body">
        <h4 className="card-title">
          <img
            className="Tweet-avatar"
            src="http://i.pravatar.cc/100"
            alt="Avatar"
          />
        </h4>
        <p className="card-text">
          <b>{name}</b>
          <i>({date})</i>
        </p>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

Tweet.propTypes = propTypes;
export default Tweet;
