import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Section.css';
import Header from './Header1';
import a from '../assets/CrownBed.jpg';
import b from '../assets/KingBed.jpg';
import c from '../assets/QueenBed.jpg';
import d from '../assets/MainDoor.png';
import e from '../assets/GlassDoor.png';
import f from '../assets/BedroomDoor.png';
import g from '../assets/GlassDining.jpg';
import h from '../assets/WoodenDining.jpg';
import i from '../assets/RectangularDining.jpg';
import j from '../assets/WalkInWardrobe.png';
import k from '../assets/MirrorWardrobe.png';
import l from '../assets/FullLengthWardrobe.png';

function Section(cartItems, notificationCount) {
  return (
    <div><Header cartCount={cartItems.length} notificationCount={notificationCount} />
    <div className="section-container">
      <div className="search-bar-container">
        <input type="text" placeholder="Furniture, Category" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <h2>Bed</h2>
      <div className="image-scroll">
        <Link to="/CrownBed"><img src={a} alt="Crown Bed" /></Link>
        <Link to="/KingBed"><img src={b} alt="King Bed" /></Link>
        <Link to="/QueenBed"><img src={c} alt="Queen Bed" /></Link>
      </div>

      <h2>Doors</h2>
      <div className="image-scroll">
        <Link to="/MainDoor"><img src={d} alt="Main Door" /></Link>
        <Link to="/GlassDoor"><img src={e} alt="Glass Door" /></Link>
        <Link to="/BedroomDoor"><img src={f} alt="Bedroom Door" /></Link>
      </div>

      <h2>Dining</h2>
      <div className="image-scroll">
        <Link to="/GlassDining"><img src={g} alt="Glass Dining" /></Link>
        <Link to="/WoodenDining"><img src={h} alt="Wooden Dining" /></Link>
        <Link to="/RectangularDining"><img src={i} alt="Rectangular Dining" /></Link>
      </div>

      <h2>Wardrobes</h2>
      <div className="image-scroll">
        <Link to="/WalkInWardrobe"><img src={j} alt="Walk In Wardrobe" /></Link>
        <Link to="/MirrorWardrobe"><img src={k} alt="Mirror Warbrobe" /></Link>
        <Link to="/FullLengthWardrobe"><img src={l} alt="Full Length Wardrobe" /></Link>
      </div>

    </div>
    </div>
  );
}

export default Section;
