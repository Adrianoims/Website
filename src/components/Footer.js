import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre</h2>
            <Link to='/sign-up'> Como Trabalhamos</Link>
            <Link to='/'>Advogados</Link>
            <Link to='/'>Termos e Servicos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contatos</h2>
            <Link to='/'>Contatos</Link>
            <Link to='/'>Endereco</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
         <div class='footer-link-items'>
            <h2>Midia Social</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             
             <img
              style = {{marginLeft:'-20px', marginTop: 0, borderRadius: '5px'}}
              width= '50'
              height = '50'
              src={'../../images/ADVlogo.png'}
            /> 
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
