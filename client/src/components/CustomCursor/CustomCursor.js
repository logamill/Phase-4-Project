import React from "react";
import "../CustomCursor/style.scss";

const CustomCursor = () => {
  let mouseCursor = document.querySelector(".cursor");
  let followCursor = document.querySelector(".secondary_cursor");
  window.addEventListener("mousemove", handle_mouse_move);

  function handle_mouse_move(e) {
    let x_val = e.pageX;
    let y_val = e.pageY;
    mouseCursor.style.top = y_val + "px";
    mouseCursor.style.left = x_val + "px";
    followCursor.style.left = x_val + "px";
    followCursor.style.top = y_val + "px";
  }

  return (
    <div>
      <div className="primary_cursor"></div>
    </div>
  );
};
export default CustomCursor;
