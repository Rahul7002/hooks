import React, { Component } from "react";

class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
      console.log("did mount working");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("interval is cleared");
  }

  render() {
    return (
      <div>
        ClassTimer : {this.state.timer}
        <button
          onClick={() => {
            clearInterval(this.interval);
            console.log("timeout is cleared");
          }}>
          {" "}
          Clear interval{" "}
        </button>
      </div>
    );
  }
}

export default ClassTimer;
