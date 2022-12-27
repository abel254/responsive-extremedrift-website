import { GamesBox } from "./GamesBox"

let nfs1 = require('../images/payback.jfif')
let nfs2 = require('../images/mostwanted13.jpg')
let nfs3= require('../images/heat.jfif')
let nfs4 = require('../images/mostwanted05.jfif')

export const Games = () => {
  return(
    <div className="games">
      <div className="games-text">
      <h2>Games</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt consequatur assumenda odio mollitia soluta.</p>
      </div>

      <div className="games-container">
        <GamesBox image={nfs1} name='NFS: Payback' price="$300"/>
        <GamesBox image={nfs2} name='NFS: MostWanted13' price="$275"/>
        <GamesBox image={nfs3} name='NFS: Heat' price="$250"/>
        <GamesBox image={nfs4} name='NFS: MostWanted05' price="$140"/>
      </div>
    </div>
  )
}