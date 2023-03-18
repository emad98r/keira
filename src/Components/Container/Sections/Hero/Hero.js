import './Hero.scss'



const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="info">
          <h4>I Am Sam Taylor</h4>
          <h1 className='skills'>DESIGNER</h1>
        </div>
        <div className="country">
          <div className="city">
            <h5>Morocco</h5>
            <p>Rabat - Casablanca</p>
          </div>
          <div className="city">
            <h5>USA</h5>
            <p>California - Detroit</p>
          </div>
          <div className="city">
            <h5>Canada</h5>
            <p>Delta - Greenwood</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero