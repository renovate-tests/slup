import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '../packages/Ripple/src/index'

class Tester extends Component {
  render() {
    return(
      <div style={{
        position: 'relative',
        background: 'blue',
        zIndex: 100,
        height: 200,
        width: 500 }}>
        <Ripple />
      </div>
    )
  }
}

render(<Tester />, document.getElementById('root'))