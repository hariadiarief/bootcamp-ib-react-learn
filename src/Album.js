import React, { Component } from "react";

const collection = [1, 2, 3, 4, 5, 6];

class Album extends Component {
  render() {
    return (
      <div>
        {collection.map((item, index) => {
          return (
            <img key={index} src={`assets/${index + 1}.png`} alt="Media" />
          );
        })}
      </div>
    );
  }
}

export default Album;
