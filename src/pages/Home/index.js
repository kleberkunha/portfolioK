import React from 'react'
import './style.css';
import MenuNav from '../../components/Navbar/index';
import AboutMeTopWide from '../../components/AboutMeTopWide';
import MyDescription from '../../components/MyDescription/index';
import Studies from '../../components/Studies/index';
import Projects from '../../components/Projects/index';

export default function Home() {
  return (
    <>

      <div className="background-top">

        <div className="content-topWide">
          <MenuNav/>
          <AboutMeTopWide/>

        </div>
        <div className="main-CV">
          <div class="cv" role="status">
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm adjust-email">
              <div className="col-sm main-socio">
                <ul className="list-socio">
                  <li className="item-socio socio-1" onClick={() => window.open("https://www.linkedin.com/in/kleber-da-cunha-822aa3a3/")}></li>
                  <li className="item-socio socio-2" onClick={() => window.open("https://github.com/kleberkunha")}></li>
                </ul>
              </div>
            </div>
            <div className="email" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox")}>Contact :  hello.klebercunha@gmail.com</div>
          </div>
        </div>

      </div>
      <svg className="svg-top-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000b76" fill-opacity="1" d="M0,192L30,208C60,224,120,256,180,256C240,256,300,224,360,218.7C420,213,480,235,540,234.7C600,235,660,213,720,197.3C780,181,840,171,900,160C960,149,1020,139,1080,144C1140,149,1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      <MyDescription/>
      <Studies/>
      <Projects/>
 





    </>
  )
}

//<svg className="wave-after-studies" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,128L480,256L960,192L1440,96L1440,320L960,320L480,320L0,320Z"></path></svg>
      