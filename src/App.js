import React from 'react';
import QuoteContainer from './Components/QuoteContainer'
import Background from './Components/Background'
import './App.css';


function App() {
  const bg = new Background(); /*All threejs work will end up here*/

  return (
      <div className="App">
        <div className="grid-wrapper">
          <QuoteContainer />
        </div>
      </div>
  );
} /*This is where all our app funnels into. Each component is here and could be passed extra properties if needed*/

export default App;

