import { Navbar } from "./Navbar"

export const Header = () => {
  return(
    <div className="header">
      <Navbar />
      <div className="text-container">
      <h3>Love Drifting and Racing Games!</h3>
      <h1>Meet the Best <br /><span>Drifters</span> and <span>Games</span> in NFS</h1>
      <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est hic, reiciendis laudantium magni, reprehenderit quidem adipisci neque error natus voluptatibus optio corporis cum.</p>
      <button className="learn-more">Learn More</button>
      </div>
    </div>
  )
}