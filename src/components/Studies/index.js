import React from 'react';
import './style.css';
import handleClick42 from './clicks/click42';
import handleClickB7web from './clicks/clickB7';
import handleClickCvideo from './clicks/clickCvideo';
import handleClickThp from './clicks/clickTHP';
//import DrawSVG from 'react-svg-drawing';
import go42 from './clicks/go42';
import gothp from './clicks/gothp';
import gob7 from './clicks/gob7';
import govideo from './clicks/govideo';
//mport icoStudy from './icoStudy';

/*
<DrawSVG className="drawSVG-study">
{icoStudy}
</DrawSVG>
*/
const Studies = () => {
  return (
      <>
        <div className="container-fluid content-Studies">
          <div className="row">
            <div class="container main-ico-studies d-flex justify-content-center">
              <div class="row">
                <div class="col">
                  <div className="title-studies">
                    <div className="icon-studies"></div>
                  </div>
                  <h1 className="studies">STUDIES</h1>
                </div>
              </div>
            </div>
            <div class="container main-Studies">
              <div class="row">
                <div class="col">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm text-center">
                        <div className="box-items-studies container">
                          <div className="boxes-school-infos ">
                            <div className="main-box-ico42 text-center">
                              <div className="d-flex justify-content-center">
                                <div className="img-42 rounded-circle " onClick={go42}></div>
                              </div>
                              <button onClick={handleClick42} className="about btn btn-primary mt-2">About</button>
                            </div>
                            <div className="about42 text-center"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="box-items-studies container">
                          <div className="boxes-school-infos ">
                            <div className="main-box-ico42 text-center">
                              <div className="d-flex justify-content-center">
                                <div className="img-thp rounded-circle" onClick={gothp}></div>
                              </div>
                              <button onClick={handleClickThp} className="about btn btn-primary mt-2">About</button>
                            </div>
                            <div className="aboutthp about-text text-center"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="box-items-studies container">
                          <div className="boxes-school-infos ">
                            <div className="main-box-ico42 text-center">
                              <div className="sub-main-icob7 d-flex justify-content-center bg-dark">
                                <div className="img-b7-web rounded-circle" onClick={gob7}></div>
                              </div>
                              <button onClick={handleClickB7web} className="about btn btn-primary mt-2">About</button>
                            </div>
                            <div className="aboutB7web about-text text-center"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="box-items-studies container">
                          <div className="boxes-school-infos ">
                            <div className="main-box-ico42 text-center">
                              <div className="d-flex justify-content-center">
                                <div className="img-curso-em-video rounded-circle" onClick={govideo}></div>
                              </div>
                              <button onClick={handleClickCvideo} className="about btn btn-primary mt-2">About</button>
                            </div>
                            <div className="aboutCvideo about-text text-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row top-icos-code-languages mt-5">
                    <ul className="d-flex">
                      <li className="html"></li>
                      <li className="css"></li>
                      <li className="bootstrap"></li>
                      <li className="js"></li>
                      <li className="git"></li>
                      <li className="reactjs"></li>
                      <li className="ruby"></li>
                      <li className="rails"></li>
                      <li className="postman"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <h3 className="comp-text text-center">.</h3>
            </div>
            <div class="container mt-5 main-moreSkills">
              <div class="row d-flex justify-content-center">
                <div class="col-4">
                  <div className="content-text">
                    <h3 className="text-center">Tools and OS</h3>
                    <ul>
                      <li className="item txt-1">Sharing project with Git and GitHub</li>
                      <li className="item txt-2">Windows and Linux environments</li>
                      <li className="item txt-3">Creation of Media Queries to manage website responsiveness</li>
                      <li className="item txt-4">Utilization of photoshop to integrate or create contents</li>
                    </ul>
                  </div>
                </div>
                <div class="col-4">
                  <div className="content-text">
                    <h3 className="text-center">PC skills</h3>
                    <ul>
                      <li className="item txt-1">Format and Reinstall - Windows / Ubuntu</li>
                      <li className="item txt-2">Data Recovery  - Hard DIsk / Pendriver / SD card</li>
                      <li className="item txt-3">Broken/Rapair - All parts</li>
                      <li className="item txt-4">Network cable crimp - RJ45 A/B</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg className="svg-studies-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000b76" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,170.7C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg className="svg-studies-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000b76" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,170.7C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </>
  );
}

export default Studies;