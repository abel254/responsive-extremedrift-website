import { TiGroup } from 'react-icons/ti'
import { TiThumbsUp } from 'react-icons/ti'
import { TiFlowSwitch } from 'react-icons/ti'
import { IconConfig } from './IconConfig'

export const TheProcess = () => {
  return (
    <div className="process">
      <div className="process-container">
        <h2>The Process</h2>
        <div className="steps">
          <div className="steps-box">
            <IconConfig> <TiGroup /></IconConfig>
            <h3>Join Drifter Community</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quidem?</p>
          </div>
          <div className="steps-box">
            <IconConfig> <TiThumbsUp /></IconConfig>
            <h3>Choose Preferred Games</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, corporis?</p>
          </div>
          <div className="steps-box">
            <IconConfig> <TiFlowSwitch /></IconConfig>
            <h3>Show Off Your Skills</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ad.</p>
          </div>
        </div>
      </div>
    </div>
  )
}