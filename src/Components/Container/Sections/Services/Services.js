import { SectionsTitle } from '../../../indexCom'
import ServiceCard from '../../../ServiceCard/ServiceCard'
import './Services.scss'




const Services = () => {
  return (
    <div className='services'>
      <div className="container">
        <SectionsTitle title='Services' />
        <ServiceCard />
        <div className="numbers">
          <div className="card">
            <b>10 <span>+</span> </b>
            <p>Happy Client</p>
          </div>
          <div className="card">
            <b>950 <span>+</span> </b>
            <p>Successful Project</p>
          </div>
          <div className="card">
            <b>40 <span>+</span> </b>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services