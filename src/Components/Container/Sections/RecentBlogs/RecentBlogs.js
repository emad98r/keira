import { SectionsTitle } from '../../../indexCom'

import './RecentBlogs.scss'

import R1 from '../../../../Images/r1.jpg';
import R2 from '../../../../Images/r2.jpg';
import R3 from '../../../../Images/r3.jpg';



const RecentBlogs = () => {
  return (
    <div className='Recent-Blogs'>
      <div className="container">
        <SectionsTitle title='Recent Blogs' />
        <div className="wrapper">
          <div className="card">
            <img src={R1} alt="" />
            <div className="info">
              <h4>Ways To Motivate Yourself</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate beatae optio labore vel dolore facilis?</p>
            </div>
          </div>
          <div className="card">
            <img src={R2} alt="" />
            <div className="info">
              <h4>Create A WordPress Theme</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate beatae optio labore vel dolore facilis?</p>
            </div>
          </div>
          <div className="card">
            <img src={R3} alt="" />
            <div className="info">
              <h4>Top Graphic Design Topics</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate beatae optio labore vel dolore facilis?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs