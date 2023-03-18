import { SectionsTitle } from '../../../indexCom'
import './OurTeam.scss'

import SamImg from '../../../../Images/team 3.jpg'
import AlexanderImg from '../../../../Images/team 1.jpg'
import AilImg from '../../../../Images/team 2.jpg'

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className='team'>
      <div className="container">
        <SectionsTitle title='Our Team Showcase' />
        <div className="team-members">
          <div className="member">
            <img src={SamImg} alt="" />
            <div className="info">

              <h4>Sam Taylor</h4>
              <p>Founder</p>
            </div>
            <div className="S-M">
              <i> <FaFacebookF /></i>
              <i> <FaInstagram /></i>
              <i> <FaTwitter /></i>
              <i> <FaYoutube /></i>
              <i> <FaLinkedin /></i>

            </div>
          </div>
          <div className="member">
            <img src={AlexanderImg} alt="" />
            <div className="info">
              <h4>Alexander Tom</h4>
              <p>Designer</p>
            </div>
            <div className="S-M">
              <i> <FaFacebookF /></i>
              <i> <FaInstagram /></i>
              <i> <FaTwitter /></i>
              <i> <FaYoutube /></i>
              <i> <FaLinkedin /></i>

            </div>
          </div>
          <div className="member">
            <img src={AilImg} alt="" />
            <div className="info">
              <h4>Ail john</h4>
              <p>App Developer</p>
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
      </div>
    </div>
  )
}

export default OurTeam