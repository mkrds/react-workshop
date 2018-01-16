import React from "react";
import PropTypes from "prop-types";
import "./TweetInput.css";

const propTypes = {
  handleTextFieldChange: PropTypes.func.isRequired,
  handleAddTweet: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

function TweetInput({ handleAddTweet, handleTextFieldChange, content, name }) {
  return (
    <div className="TweetInput">
      <h1 className="TweetInput-title display-3">Dodaj tweeta!</h1>
      <form onSubmit={handleAddTweet}>
        <div className="form-group">
          <textarea
            name="content"
            type="text"
            className="form-control form-control-lg"
            placeholder="Co słychać?"
            onChange={handleTextFieldChange}
            value={content}
          />
        </div>
        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control form-control-lg"
            placeholder="Nick"
            onChange={handleTextFieldChange}
            value={name}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Dodaj tweeta"
          />
        </div>
      </form>
    </div>
  );
}

TweetInput.propTypes = propTypes;
export default TweetInput;
