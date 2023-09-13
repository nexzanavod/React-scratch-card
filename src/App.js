import React from 'react';
import './App.css';
import ScratchCard from 'react-scratchcard';
import image from './assets/background.jpg'
import winnerImage from './assets/result.jpg'

function App() {
  const settings = {
    width: 350,
    height: 350,
    image: image,
    finishPercent: 50,
    onComplete: () => console.log('The card is now clear!')
  };

  return (
    <div>
      <ScratchCard {...settings}>
      <img src={winnerImage} alt="Winner" width={300} height={300} />

  </ScratchCard>;
   
    </div>
  );
}

export default App;

