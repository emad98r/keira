import './ProjectCard.scss'

const ProjectCard = (props) => {
  return (
    <div className='project-cont'>
      <img src={props.img} alt="" />
      <div className="info">
        <h4>Mockup Collection</h4>
        <h6>Branding</h6>
      </div>
      <div className="on-hover">
        <h4>view</h4>
      </div>

    </div>
  )
}

export default ProjectCard