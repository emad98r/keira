import { SectionsTitle } from '../../../indexCom'
import './GetInTouch.scss'
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";


const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <div className="container">
        <SectionsTitle title='Get In Touch' />
        <div className="wrapper">
          <div className="info">
            <div className="data">
              <h4>Email</h4>
              <p>Support@example.Com</p>
              <p>Support@example.Com</p>
            </div>
            <div className="data">
              <h4>Call Us</h4>
              <p>700 001 70 16</p>
              <p>700 1414 34 11</p>
            </div>
            <div className="data">
              <h4>ADDRESS</h4>
              <p>405, Royal Square, Nr.<br />
                ARLINGTON VA 41174, USA</p>
            </div>
          </div>
          <form>
            <div className="user-info">
              <input type="text" placeholder='Username' required />
              <input type="text" placeholder='Email' required />
              <input type="text" placeholder='Number' required />
            </div>
            <textarea rows="6" placeholder='Message'></textarea>
            <button ><RiSendPlaneFill />Send Message</button>
          </form>


        </div>
        <div className="S-M">
          <i> <FaFacebookF /></i>
          <i> <FaInstagram /></i>
          <i> <FaTwitter /></i>
          <i> <FaYoutube /></i>
          <i> <FaLinkedin /></i>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch