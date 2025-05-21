import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/rectangularDining1.png'; 
import b from '../../assets/rectangularDining2.png'; 
import c from '../../assets/rectangularDining3.png'; 
import d from '../../assets/rectangularDining4.png'; 
import e from '../../assets/rectangularDining5.png'; 

const RectangularDiningData = [
  { name: "Rectangular Dining 1", price: "10000Rs", image: a },
  { name: "Rectangular Dining 2", price: "20000Rs", image: b },
  { name: "Rectangular Dining 3", price: "30000Rs", image: c },
  { name: "Rectangular Dining 4", price: "40000Rs", image: d },
  { name: "Rectangular Dining 5", price: "50000Rs", image: e },
];

function RectangularDining({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Rectangular Dining" furniture={RectangularDiningData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default RectangularDining;
