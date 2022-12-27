
type GamesBoxProps = {
  image: string
  name: string
  price: string
}

export const GamesBox = ({image, name, price}: GamesBoxProps) => {
  return(
    <div className="games-box">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text-box">
      <h4>{name}</h4>
      <h3>{price}</h3>
      </div>
      <button className="learn-more games-btn">Learn More</button>
    </div>
  )
}