import React, { Component } from "react";
import Card from "./Card";

export default class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center_of_wheel: {
        x: 0,
        y: 0,
      },
      radius: 370,
      cards: [],
      theta: 0.0,
      posts: [],
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ timeout: !this.timeout });
    // }, 5000);

    fetch("/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));

    this.setState({
      center_of_wheel: {
        x: parseFloat(this.wheel.style.width) / 2.0,
        y: parseFloat(this.wheel.style.height) / 2.0,
      },
    });
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
    // clearTimeout(this.timeout);
    return (
      <>
        <div
          onWheel={this.handleScroll}
          ref={(ref_id) => (this.wheel = ref_id)}
          style={styles.wheel}
        >
          {this.state.posts.map((post) => {
            return (
              <Card
                post={post}
                pic={post.image}
                radius={this.state.radius}
                g
                theta={(Math.PI / 25.0) * post.id}
                center={this.state.center_of_wheel}
                key={`card_${post.id}`}
                id={post.id}
              />
            );
          })}
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
