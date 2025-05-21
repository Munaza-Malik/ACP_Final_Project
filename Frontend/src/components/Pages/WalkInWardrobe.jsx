import React from 'react';
import Footer from '../Footer';
import Furniture from '../Furniture';
import a from '../../assets/walkinWardrobe1.png'; 
import b from '../../assets/walkinWardrobe2.png'; 
import c from '../../assets/walkinWardrobe3.png'; 
import d from '../../assets/walkinWardrobe4.png'; 
import e from '../../assets/walkinWardrobe5.png'; 

const WalkInWardrobesData = [
  { name: "Walkin Wardrbe 1", price: "1000Rs", image: a },
  { name: "Walkin Wardrbe 2", price: "20000Rs", image: b },
  { name: "Walkin Wardrbe 3", price: "30000Rs", image: c },
  { name: "Walkin Wardrbe 4", price: "40000Rs", image: d },
  { name: "Walkin Wardrbe 5", price: "50000Rs", image: e },
];

function WalkInhWardrobe({ addToCart }) {
  return (
    <div className="Main">
      <Furniture heading="Walk In Wardrobe" furniture={WalkInWardrobesData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default WalkInhWardrobe;
