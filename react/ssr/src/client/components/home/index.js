import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log('click me');
  }
  return (
    <section>
      Home
      <br />
      <button onClick={handleClick}>click me</button>
    </section>
  )
};

export default Home;
