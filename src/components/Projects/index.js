import React from 'react';
import './style.css';
import Footer from '../../components/subcomponent/Footer/index';
//import DrawSVG from 'react-svg-drawing';


const Projects = () => {
  return (
    <>
      <div className="container" id="section3">
        <div className="row">
          <div className="col-sm d-flex justify-content-center">
            <div className="project-icon">
              <h1>PROJECTS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-projects">
          <div className="col-sm main-projects">
            <div className="card card-projects">
              <div className="card-img-top" alt=""></div>
              <div className="card-body">
                <h5 className="card-title">Sports With Me</h5>
                <p className="card-text">
                  Is an application to find people to do sport, if you do any sport
                  and want to find someone to join you, you just need to create an event and wait.
                </p>
                <button type="button" class="about-project btn btn-primary"
                  onClick={() => window.open("https://sports-with-me.herokuapp.com/")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-1"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Gossip Project</h5>
                <p className="card-text">
                  A project made in The Hacking project, is a social application training backend in Ruby on Rails.
                  In this app you can registrate, login, create a post, edit and delete.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://github.com/kleberkunha/Gossip_Project_Pimp")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Pizza Project</h5>
                <p className="card-text">
                  This is an application to were i was training JS, this aplication
                  takes the value of each pizza and add it in the trolley.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://kleberkunha.github.io/Pizza_Site_JS/")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Movie Search</h5>
                <p className="card-text">
                  This application serves only to search details
                  about any movie or series, was used an API from IMDB.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://github.com/kleberkunha/Movie_List-info_Project")}>
                  See project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-projects-1">
          <div className="col-sm main-projects">
            <div className="card card-projects">
              <div className="card-img-top-4" alt=""></div>
              <div className="card-body">
                <h5 className="card-title">Kitten market</h5>
                <p className="card-text">
                  This application in Ruby on rails is a market for kats, here you can resgister, login,...
                </p>
                <button type="button" class="about-project btn btn-primary"
                  onClick={() => window.open("https://sports-with-me.herokuapp.com/")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-5"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Note Block</h5>
                <p className="card-text">
                  Project Note Block in ReactJS using StorageData,
                  in this application you can create a note, edit, delete and it is automatic saved.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://github.com/kleberkunha/Gossip_Project_Pimp")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-6"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Project Vote</h5>
                <p className="card-text">
                  This is a vote machine app from Brazil,
                  you can vote for governor or city ​​councilor, or if you don't want to vote, just press White.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://kleberkunha.github.io/Pizza_Site_JS/")}>
                  See project
                </button>
              </div>
            </div>
            <div className="card card-projects">
              <img
                className="card-img-top-7"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Day/Night</h5>
                <p className="card-text">
                  This is an appplication to change the color of the page, here you will find some pages only for test, the most important is the function DAY/NIGHT, in JavaScript.
                </p>
                <button type="button" className="about-project btn btn-primary"
                  onClick={() => window.open("https://github.com/kleberkunha/Movie_List-info_Project")}>
                  See project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000b76" fill-opacity="1" d="M0,288L40,266.7C80,245,160,203,240,181.3C320,160,400,160,480,138.7C560,117,640,75,720,85.3C800,96,880,160,960,181.3C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </>
  );
}

export default Projects;