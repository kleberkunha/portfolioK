import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div class="container footer">
        <div class="row">
          <div class="col-sm footer-text">
            <p className="">Made by <Link onClick={() => window.open("https://github.com/kleberkunha")}>Kleber da Cunha </Link></p>
            <button>BACK to top</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;