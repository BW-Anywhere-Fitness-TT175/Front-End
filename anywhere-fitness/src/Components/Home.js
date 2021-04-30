import React from 'react';

import Navbar from './Navbar.js';

const homeStyles = {
  backgroundImage: './src/MarketingPages/AnywhereFitness/images/fitness.jpg',
};

const Home = (props) => {
  const { history } = props;

  return (
    <div className='home' style={homeStyles}>
      <h1>Anywhere Fitness</h1>

      <Navbar history={history} />
    </div>
  );
};

export default Home;
