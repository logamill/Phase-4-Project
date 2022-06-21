import React from "react";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                All projects.
              </a>
            </li>

            <li class="navigation__item">
              <a href="#" class="navigation__link">
                My projects.
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                Add new.
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                Log out.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
