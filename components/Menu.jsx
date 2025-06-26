import React from 'react';
import '../styles/Menu.css';

const Menu = () => (
  <section id="menu">
    <h2>Menu</h2>
    <ul>
      <li>
        <h3>Spaghetti Carbonara</h3>
        <p>Classic Italian pasta dish with pancetta and egg</p>
      </li>
      <li>
        <h3>Margherita Pizza</h3>
        <p>Tomato, mozzarella, and basil pizza</p>
      </li>
      {/* Add more menu items here */}
    </ul>
  </section>
);

export default Menu;
