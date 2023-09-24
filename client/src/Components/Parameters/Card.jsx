import React from 'react';

const Card = ({ title, content, onClick }) => {
  return (
    <div className="box">
      <span></span>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClick}>Read More</button> {/* Use button instead of anchor */}
      </div>
    </div>
  );
};

export default Card;
