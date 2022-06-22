import React from "react";

function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

export default function Card(props) {
  let new_coords = get_my_coords(props.theta, props.radius);

  const handleMouseOver = (e) => {
    e.target.closest("div.card").style = {
      // position: "absolute",
      // left: `50%`,
      // top: `50%`,
      // zIndex: `9000`,
      // transform: `translate(-50%, -50%) scale(2)`,
    };
  };
  const handleMouseLeave = (e) => {
    console.log(e.target.closest("div.card"));
  };

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="card"
      style={{
        // ...styles.card,

        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
        zIndex: `${props.id}`,
        transformStyle: `preserve-3d`,
        transform: `translate(-50%, -50%) rotateX(${props.center.y}rad) rotateY(${props.theta}rad)`,
      }}
    >
      <img className="image" src={props.pic} alt="art work image" />
    </div>
  );
}

// const styles = {
//   card: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     // transform: "translate(-50%, -50%)  rotate3d(0, 1, 0, 65deg)",
//     transformStyle: "preserve-3d",

//     height: "100px",
//     width: "100px",
//     cursor: "pointer",
//   },
//   image: {
//     height: "100px",
//     width: "100px",
//   },
// };
