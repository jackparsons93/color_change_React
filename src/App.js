//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from "react";
function App() {
  const timer = useRef();
  const [count, setCount] = React.useState(1000);
  
  useEffect(() => {
    //console.log('Only runs on mount');
    timer.current=setInterval(randomColor, 1000);
    return () => {
      // Cleanup
      clearInterval(timer.current);
    };
  }, []);
  function handleDecrease() {
    setCount(count - 100);
    clearInterval(timer.current);
    timer.current = setInterval(randomColor, count);
    

  }
  function handleIncrease() {
    setCount(count + 100);
    clearInterval(timer.current);
    timer.current = setInterval(randomColor, count);

  };
  function  randomColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var invertedColor = invertColor(randomColor);
  
  
    document.querySelector('body').style.backgroundColor = '#' + randomColor;
    document.querySelector('body').style.color = '#' + invertedColor;
    console.log(randomColor);
  };
  function invertColor(color){
    var r= color.slice(0,2);
    var g= color.slice(2,4);
    var b= color.slice(4,6);
    var rInv= (255 - parseInt(r,16)).toString(16);
    var gInv= (255 - parseInt(g,16)).toString(16);
    var bInv= (255 - parseInt(b,16)).toString(16);
    return rInv+gInv+bInv;
  };
  
  return (
    <div className="App">
      <h1>Interval Sent to setInterval:{count}</h1>
      <button onClick={handleDecrease}>Decrease Color Change interval </button>
      <br/>
      <button onClick={handleIncrease}>Increase Color change interval </button>
      <br/>
      <h1>These are complimentary colors</h1>
      <h2> That means the colors standout</h2>
    </div>
  );
}

export default App;
