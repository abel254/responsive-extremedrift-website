import { DriftersBox } from "./DriftersBox"

let drifter1 = require('../images/gamer1.jpg')
let drifter2 = require('../images/gamer2.jpg')
let drifter3 = require('../images/gamer3.webp')
let drifter4 = require('../images/gamer4.webp')

export const Drifters = () => {
  return(
    <div className="drifters">
      <div className="drifters-text">
      <h2>Drifters/Gamers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo.</p>
      </div>

      <div className="drifters-container">
        <DriftersBox image={drifter1} name="Kraken"/>
        <DriftersBox image={drifter2} name="MadDog"/>
        <DriftersBox image={drifter3} name="Bender"/>
        <DriftersBox image={drifter4} name="Lynch"/>
      </div>
    </div>
  )
}