import React from "react";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Carousel.</h1>

      <a href="/login" className="home-page__add-btn add-btn">
        Log in
      </a>

      <a href="/signup" className="home-page__add-btn add-btn">
        Sign up{" "}
      </a>
    </div>
  );
}
