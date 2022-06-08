import React from "react";
import cat from "./cat.jpg";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={cat}
        alt="cat"
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
        }}
      />
    );
  }
}

export default Cat;
