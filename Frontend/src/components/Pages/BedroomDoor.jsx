import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/bedroomDoor1.png'; 
import b from '../../assets/bedroomDoor2.png'; 
import c from '../../assets/bedroomDoor3.png'; 
import d from '../../assets/bedroomDoor4.png'; 
import e from '../../assets/bedroomDoor5.png'; 

const boedroomDoorsData = [
  { name: "Bedroom Door 1", price: "10000Rs", image: a },
  { name: "Bedroom Door 2", price: "20000Rs", image: b },
  { name: "Bedroom Door 3", price: "30000Rs", image: c },
  { name: "Bedroom Door 4", price: "40000Rs", image: d },
  { name: "Bedroom Door 5", price: "50000Rs", image: e },
];

function BedroomDoor({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Bedroom Door" furniture={boedroomDoorsData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default BedroomDoor;
