import React from 'react';
import SlotM from './SlotM';

const App = () => {
 return(
   <>
        <div className = "mainDiv">
            <h1>🎰 Welcome to Slot Machine Game 🎰</h1> <hr/>
            <SlotM x = "🍎" y = "🍎" z = "🍎" />
            <SlotM x = "🍎" y = "😄" z = "🍎" />
            <SlotM x = "😄" y = "😈" z = "🍎" />
            <SlotM x = "🐙" y = "🐙" z = "🐙" />
        </div>
   </>
 );

}


export default App;