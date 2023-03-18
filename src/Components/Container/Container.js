import { AboutMe, GetInTouch, Hero, OurTeam, Projects, RecentBlogs, Resume, Services } from "./Sections/indexSec"


const Container = () => {
  return (
    <div>


      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Resume />
      <OurTeam />
      <RecentBlogs />
      <GetInTouch />
    </div>
  )
}

export default Container