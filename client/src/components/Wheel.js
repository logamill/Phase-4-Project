import React, { Component } from "react";
import Card from "./Card";

export default class Wheel extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      radius: 370,
      cards: [],
      theta: 0.0,
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let new_cards = [];

    for (let i = 0; i < 50; i++) {
      new_cards.push(
        <Card
          pic={`http://picsum.photos/${(i + 1) * 100}/200`}
          radius={this.state.radius}
          theta={(Math.PI / 25.0) * i}
          center={center_of_wheel}
          key={`card_${i}`}
          id={i}
        />
      );
    }
    this.setState({ cards: new_cards });
  }

  handleScroll = (event) => {
    clearTimeout(this.anim_id);
    this.wheel.style.transformStyle = "preserve-3d";
    this.temp_theta += event.deltaY;
    (this.wheel.style.transformStyle = `preserve-3d`),
      (this.wheel.style.transform = `translate(-50%, -50%)  rotateX(65deg)
    rotate(${this.temp_theta * 0.08}deg) `);
    this.anim_id = setTimeout(() => {
      this.setState({ theta: this.temp_theta });
    }, 150);
  };

  render() {
    return (
      <>
        <div
          onWheel={this.handleScroll}
          ref={(ref_id) => (this.wheel = ref_id)}
          style={styles.wheel}
        >
          {this.state.cards}
        </div>
        <h2 className="explore">Explore.</h2>
      </>
    );
  }
}

const styles = {
  wheel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotateX(65deg)",
    height: "700px",
    width: "700px",
  },
};
