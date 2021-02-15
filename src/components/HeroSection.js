import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img
              style = {{marginTop: '-100px'}}
              width= '100%'
              height = '600'
              src={'../../images/ADV.png'}
            />         
     
      <div className='hero-btns'  style = {{marginTop: '-130px'}}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Whatsapp
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
