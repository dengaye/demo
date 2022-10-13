import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  const handleClick = () => {
    console.log('click me');
  }
  return (
    <section>
      Home
      <br />
      <ul>
        <li>
          <Link to="/users">To user page</Link>
        </li>
      </ul>
      <button onClick={handleClick}>click me</button>
    </section>
  )
};

export default Home;
