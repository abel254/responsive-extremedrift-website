
type DriftersBoxProps = {
  image: string
  name: string
}

export const DriftersBox = ({image, name}: DriftersBoxProps) => {
  return(
    <div className="drifters-box">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <button className="learn-more">Learn More</button>
    </div>
  )
}