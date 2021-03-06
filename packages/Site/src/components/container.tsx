import Inferno from 'inferno'
import styled from '@slup/theming'

import { Col, Grid } from '@slup/grid'

export const Container = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  background: ${props => props.theme.background};
  overflow: auto;
`

export const CenterContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = ({ children }) =>
  <Grid style={{ paddingTop: 64 }}>
    <Col sm={12}>
      {children}
    </Col>
  </Grid>

