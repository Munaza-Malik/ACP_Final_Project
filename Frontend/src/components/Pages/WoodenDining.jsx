import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/woodenDining1.png'; 
import b from '../../assets/woodenDining2.png'; 
import c from '../../assets/woodenDining3.png'; 
import d from '../../assets/woodenDining4.png'; 
import e from '../../assets/woodenDining5.png'; 

const WoodenDiningData = [
  { name: "Wooden Dining 1", price: "10000Rs", image: a },
  { name: "Wooden Dining 2", price: "20000Rs", image: b },
  { name: "Wooden Dining 3", price: "30000Rs", image: c },
  { name: "Wooden Dining 4", price: "40000Rs", image: d },
  { name: "Wooden Dining 5", price: "50000Rs", image: e },
];

function WoodenDining({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Wooden Dining" furniture={WoodenDiningData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default WoodenDining;
