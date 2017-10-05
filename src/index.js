import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PRODUCTS = [
    {
      name: "John Deere Farm Tractor with Loader",
      price: 31,
      id: 1,
      description:"Pedal Powered vehicles provide a fun and exciting way to exercise while helping to develop fine motor skills.",
      creationdate:"07/27/2017"
    },
    {
      name: "Ematic EBB9224PN Bluetooth CD Boombox - Pink",
      price: 35,
      id: 2,
      description:"The Ematic EBB9224PN CD Boombox with Bluetooth Audio and Speaker phone lets you enjoy great sound from CDs, your smart phone, or the radio whenever and wherever. ",
      creationdate:"07/27/2017"
    },
    {
      name: "Razor Hovertrax 2.0 Self-Balancing Smart Scooter - Red",
      price: 42,
      id: 3,
      description:"Step on the deck and go with Razor Hovertrax 2.0, the world's smartest self-balancing electric scooter.",
      creationdate:"07/27/2017"
    },
  ];
  var nextId = 4;

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
