import React from 'react';
import './App.css';
import ScratchCard from 'react-scratchcard';
import scratch from './assets/NonScratch.png'


function App() {
  const settings = {
    width: '350px',
    height: '400px',
    image: scratch,
    finishPercent: 60,
    onComplete: () => console.log('The card is now clear!')
  };

  return (
    <div className='background-img'>
      <ScratchCard {...settings}>
        <div className='number'>
          2 3 4 5 2
        </div>
      </ScratchCard>


    </div>
  )
}

export default App;

