import Inferno   from 'inferno'

import styled, { lightTheme } from '@slup/theming'

const Direction = styled.div`
  display: block;
`

const Base = styled.div`
  display: inline-flex;
`

const Label = styled.label`
  user-select: none;
  color: ${props => props.theme.text || lightTheme.text};
  margin-right: ${props => props.right ? 0 : 16}px;
  margin-left: ${props => props.right ? 16 : 0}px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export const Container = (props) =>
  <Direction>
    <Base>
      {props.leftLabel
        ? <Label {...props} onClick={props.disabled 
            ? null 
            : props.onChange
          }>
          {props.leftLabel}
        </Label>

        : null
      }

      {props.children}

      {props.rightLabel
        ? <Label {...props} right onClick={props.disabled 
            ? null
            : props.onChange
          }>
          {props.rightLabel}
        </Label>

        : null
      }
    </Base>
  </Direction>
