import React, { Component } from "react";

import "./App.css";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Album from "./Album";

const numbers = [1, 2, 3, 4, 5, 6];

class App extends Component {
  state = {
    counter: 0
  };

  click = async () => {
    // Wait for setState finished
    await this.setState({
      counter: this.state.counter + 1
    });
    console.log("CLICK!", this.state.counter);
  };

  render() {
    return (
      <div>
        <main className="container">
          <Header />
          <Paragraph />
          {numbers.map(item => {
            return <Button number={item} />;
          })}
          <p>{this.state.counter} clicks</p>
          <button onClick={this.click}>Click Me!</button>
          <Album />
        </main>
      </div>
    );
  }
}

export default App;
