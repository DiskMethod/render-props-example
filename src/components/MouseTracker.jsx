import React from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <Mouse
          render={(mouse) => {
            return <Cat mouse={mouse} />;
          }}
        />
      </>
    );
  }
}

export default MouseTracker;
