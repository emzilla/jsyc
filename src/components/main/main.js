import React from 'react'
import styled from 'styled-components'

const altBG = `../../blue-sailboat-bg.png`
const catsBG = `../../cats-bg.gif`
const mainBG = `../../body-bg.png`

const Main = styled.main`
  background-image: url(${props => props.theme === 'alt' ? altBG : props.theme === 'cats' ? catsBG : mainBG});
  box-shadow: inset 1px 0px 0px #8c8c8c, inset 2px 0px 0px #000;
  position: relative;
`

export default Main