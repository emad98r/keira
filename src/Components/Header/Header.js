import './Header.scss'
import { BsList } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";



function showList() {
  document.querySelector('.home-list').style.cssText = `display:block;`

};

function showNav() {
  document.querySelector('nav').style.cssText = `display:flex`
  document.querySelector('.open-list').style.cssText = `display:none;`
  document.querySelector('.close-list').style.cssText = `display:block;`
};
function hideNav() {
  document.querySelector('nav').style.cssText = `display:none`
  document.querySelector('.open-list').style.cssText = `display:block;`
  document.querySelector('.close-list').style.cssText = `display:none;`
};


const Header = () => {
  return (

    <>
      <header>
        <div className="container">


          <div className="logo"><spam>P</spam>ortfolio</div>

          <i className='open-list' onClick={showNav}><BsList /></i>
          <i className='close-list' onClick={hideNav}><VscChromeClose /></i>
        </div>
      </header>
      <nav>

        <ul>
          <li onClick={showList} className='home-btn'>home
            <ul className='home-list'>
              <li>Home no.2</li>
              <li>Home no.1</li>
              <li>Home no.3</li>
              <li>Home no.4</li>
              <li>Home no.5</li>
            </ul>
          </li>
          <li>About me</li>
          <li>services</li>
          <li>resume</li>
          <li>portfolio</li>
          <li>team</li>
          <li>news</li>
          <li>contact</li>
        </ul>
        <div className="info">
          <div>
            <b>Email</b>
            <p>SUPPORT@EXAMPLE.COM</p>
          </div>
          <div>
            <b>CALL US</b>
            <p>700 001 70 16</p>
          </div>
          <div>
            <b>ADDRESS</b>
            <p>405, ROYAL SQUARE, NR.</p>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Header