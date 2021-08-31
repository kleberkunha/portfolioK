import React from 'react';
import './style.css';

const AboutMeTopWide = () => {
  return (
      <>
        <div className="container content-aboutMe-bgWide" id="section1">
          <div className="row sizing-box">
            <div className="main-boxCard col">
              <div className="content-photo col-3 rounded-circle bg-light"></div>
              <div className="card">
                <div className="card-header w-100"><h1 className="text-center">Kleber da Cunha</h1></div>
                <div className="card-body">
                  <h3 className="card-title text-center">Delevoper Web</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default AboutMeTopWide;