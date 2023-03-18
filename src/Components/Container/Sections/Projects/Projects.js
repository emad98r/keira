import { ProjectCard, SectionsTitle } from '../../../indexCom'
import './Projects.scss'

import p1 from '../../../../Images/p1.jpg'
import p2 from '../../../../Images/p2.jpg'
import p3 from '../../../../Images/p3.jpg'
import p4 from '../../../../Images/p4.jpg'
import p5 from '../../../../Images/p5.jpg'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="container">
        <SectionsTitle title='Projects' />
        <div className="small-cont">
          <div className="first-row">

            <ProjectCard img={p1} />
            <ProjectCard img={p2} />
          </div>
          <div className="second-row">

            <ProjectCard img={p3} />
            <ProjectCard img={p4} />
            <ProjectCard img={p5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects