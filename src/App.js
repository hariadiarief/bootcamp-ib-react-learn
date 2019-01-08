import React, { Component } from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>hello world</div>
        <Paragraph />
      </div>
    );
  }
}

export default App;
