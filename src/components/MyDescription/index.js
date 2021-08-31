import React from 'react';
import './style.css';
import DrawSVG from 'react-svg-drawing';
import icoMe from './icoMe';
import skatesvg from './skateMe';


const MyDescription = () => {
  return (
      <>
        <div className="container-fluid content-MyDescription">
          <div className="row">
            <div className="presentation-title col ">
              <div className="title-presentation">
                <div className="icon-info"></div>
                
              </div>
            </div>
            <h2 className="text-center mt-3">About me</h2>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-8 mt-4">
                  <p className="text-center">I worked for years reparing computers, one day i decided to try code and since then i don't stop.</p>
                  <p className="text-center">Coding for me is something really great that keep me busy for hours without see the time passing,
                   as i'm learning i can take hours to resolve a problem, but this do not motivate me, actually i like to find and resolve problems.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm hobies">
                  <div className="hobie-mainUl">
                    <div className="skatesvg">
                      {skatesvg}
                    </div>
                    <ul className="list-hobies mb-5 mt-3">
                      <li>
                        <div className="text-center pt-3">
                          <h6>Code</h6>
                          <img src="https://img.icons8.com/color-glass/48/000000/code.png" width="40px" alt="Code"/>
                        </div>
                      </li>
                      <li>
                        <div className="text-center pt-3">
                          <h6>Game</h6>
                          <img src="https://img.icons8.com/color/48/000000/keyboard.png" width="40px" alt="Game"/>
                        </div>
                      </li>
                      <li>
                        <div className="text-center pt-3">
                          <h6>Skateboard</h6>
                          <img src="https://img.icons8.com/emoji/48/000000/skateboard-emoji.png" width="40px" alt="Skateboard"/>
                        </div>
                      </li>
                      <li>
                        <div className="text-center pt-3">
                          <h6>Music</h6>
                          <img src="https://img.icons8.com/dusk/64/000000/rock-music.png" width="40px" alt="Music"/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-5 resize-svg">
                  <DrawSVG className="drawSVG-aboutMe">
                    {icoMe}
                  </DrawSVG>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg className="svg-desc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000b76" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,218.7C672,245,768,267,864,266.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="svg-desc-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000b76" fill-opacity="1" d="M0,128L40,106.7C80,85,160,43,240,42.7C320,43,400,85,480,96C560,107,640,85,720,80C800,75,880,85,960,80C1040,75,1120,53,1200,58.7C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </>
  );
}

export default MyDescription;