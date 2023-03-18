import { SectionsTitle } from '../../../indexCom'
import './Resume.scss'



const Resume = () => {
  return (
    <div className='resume'>
      <div className="container">
        <SectionsTitle title='Resume' />
        <div className="wrapper">
          <div className="info">
            <h3>Experience.</h3>
            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine.</p>
            <hr />
            <b>Photo Agency Shutter</b>
            <p>Photographer-intern 2016–2017</p>
            <b>Studio e.Oliver</b>
            <p>Photographer-retoucher 2017–Present</p>
          </div>
          <div className="info">
            <h3>Education.</h3>
            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine.</p>
            <hr />
            <b>Photography School</b>
            <p>New York Film Academy 2010–2012</p>
            <b>Photography Universities</b>
            <p>Bloomfield Hills, MI 2013–2015</p>
          </div>
          <div className="info">
            <h3>Equipment.</h3>
            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine.</p>
            <hr />
            <b>Digital cameras</b>
            <p>Canon EOS 5D Mark IV Sony Alpha</p>
            <b>Video camera</b>
            <p>Sony AX53 4K Handycam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume