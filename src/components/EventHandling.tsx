import React, { type MouseEventHandler } from "react";

export default function EventHandling() {
  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    console.log("Mouse Entered", e.currentTarget);
  }
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("ClICKED", e.currentTarget);
  }

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
