
let about = require('../images/about-pic.jpg')

export const About = () => {
  return(
    <div className="about">
      <div className="image">
        <img src={about} alt="About-pic" />
      </div>
      <div className="about-text">
      <h2>We Engage Together the Best Drifters in the Most Rated NFS Games</h2>
      <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit similique quam sapiente excepturi ut ad ex nulla quod aspernatur, tenetur neque quibusdam facere ab iure minus possimus, cum corrupti.</p>
      <div className="about-btn">
      <button className="learn-more">Learn More</button>
      </div>
      </div>
    </div>
  )
}