import React from "react";

const NavBar = () => {
  return (
    <header>
      <section class="container">
        <a href="#">
          <h1>Feedr</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">
                News Source: <span>Source Name</span>
              </a>
              <ul id="sourceMenuMain" />
            </li>
          </ul>
          <section id="search">
            <input type="text" name="name" value="" />
            <a href="#">
              <img
                src="http://res.cloudinary.com/jkeohan/image/upload/v1533735338/search_icon.png"
                alt=""
              />
            </a>
          </section>
        </nav>
        <div class="clearfix" />
      </section>
    </header>
  );
};


export default NavBar;