import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

const Bar = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 8px;
  background: ${props => props.checked ? 'rgba(0, 150, 136, .7)' : 'rgba(0, 0, 0, .38)'};
  position: relative;
  transition: background 200ms linear;
  cursor: pointer;
`

const Thumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1), background 200ms linear;
  background: ${props => props.checked ? 'rgb(0, 150, 136)' : '#FAFAFA'};
  position: absolute;
  top: -3px; left: -2px;
  transform: ${props => props.checked ? 'translateX(100%)' : 'translateX(0)'};
  pointer-events: none;
`


export class Switch extends Component {
  render(props) {
    return(
      <Bar {...props} onClick={props.onChange}>
        <Thumb onClick={props.onChange} checked={props.checked} />
      </Bar>
    )
  }
}
