import React from "react";
import Mouse from "./Mouse";
// import Cat from "./Cat";
import cat from "./cat.jpg";

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <Mouse>
          {(mouse) => {
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
          }}
        </Mouse>
      </>
    );
  }
}

export default MouseTracker;
