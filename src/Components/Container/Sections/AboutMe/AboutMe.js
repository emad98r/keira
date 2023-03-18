import { SectionsTitle } from '../../../indexCom';
import './AboutMe.scss';
import AboutMeImg from '../../../../Images/about me img.jpg'


const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <SectionsTitle title='about me' />
        <div className="info">
          <div className="img">
            <img src={AboutMeImg} alt="" />
          </div>
          <div className="data">
            <h2>Hello, Im Sam Taylor</h2>
            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person</p>
            <div className="skills">
              <div className="skill">
                <div className="skill-title">
                  <b>Product Design</b>
                  <b>100%</b>
                </div>
                <div className='progress-bar'>
                  <div style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <b>Ux Design</b>
                  <b>70%</b>
                </div>
                <div className='progress-bar'>
                  <div style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <b>Mobile Design</b>
                  <b>50%</b>
                </div>
                <div className='progress-bar'>
                  <div style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            <button>Hire Me <spam>></spam> </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe