import React, { Component } from "react";

// import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Button from "./Button";

const numbers = [1, 2, 3, 4, 5, 6];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Paragraph />
        {numbers.map(item => {
          return <Button number={item} />;
        })}
      </div>
      // Bikin ini -> Make state simpler
    );
  }
}

export default App;
