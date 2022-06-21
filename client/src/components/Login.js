import React from "react";

export default function Login() {
  const handleSignup = async (e) => {
    e.preventDefault();
    let form = new FormData(document.querySelector(`#signup-form`));
    let req = await fetch(`/login`, {
      method: `POST`,
      body: form,
    });
    let user = await req.json();
    console.log(user);
  };

  return (
    <div className="login">
      <form className="form" id="signup-form" onSubmit={handleSignup}>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full Name"
            required
            id="name"
            name="username"
          />
          <label for="name" class="form__label">
            Username
          </label>
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="password"
            name="password"
          />
          <label for="password" class="form__label">
            Password
          </label>
        </div>

        <div className="form__group">
          <button className="form__btn-text">Log in &rarr;</button>
        </div>
      </form>
    </div>
  );
}
