import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/mainDoor1.png'; 
import b from '../../assets/mainDoor2.png'; 
import c from '../../assets/mainDoor3.png'; 
import d from '../../assets/mainDoor4.png'; 
import e from '../../assets/mainDoor5.png'; 

const MainDoorsData = [
  { name: "Main Door 1", price: "10000Rs", image: a },
  { name: "Main Door 2", price: "20000Rs", image: b },
  { name: "Main Door 3", price: "30000Rs", image: c },
  { name: "Main Door 4", price: "40000Rs", image: d },
  { name: "Main Door 5", price: "50000Rs", image: e },
];

function MainDoor({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Main Door" furniture={MainDoorsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default MainDoor;
