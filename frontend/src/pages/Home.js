import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to JAWD Fabrics</h1>
      <Link to="/shop">Shop Now</Link>
    </div>
  );
}

export default Home;
