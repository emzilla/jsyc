import React from 'react'
import styled from 'styled-components'

const headerBG = `../../header-bg.png`

const StyledHeader = styled.header`
  background-color: #C2E6E5;
  background-image: url(${headerBG});
  padding: 35px 15px 35px 35px;
  border-right: solid 4px #ccc;
	box-shadow: inset -1px 0px 0px white, inset -2px 0px 0px #ccc;
`

class Header extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StyledHeader>
        <h1>
          <span className="visuallyhidden">Johnson Street Yacht Club Menu</span>
          <img src="../../gifs/links-wolf.gif" alt="Sparkly Wolf that says Links"/>
        </h1>
        { children }
        <div className="contact">
          <p className="contact__address">710 W Johnson St,<br />
          Raleigh, NC 27603</p>
          <img src="../../gifs/anarchygif.gif" alt="spinning anarchy symbol"/>
          <ul className="contact__hours">
            <li>OPENING SOON</li>
            <li>Check back here for hours.</li>
          </ul>
          <div className="contact__footer">
            <img src="../../gifs/steering-wheel.gif" alt="ship steering wheel"/>
            <img src="../../gifs/smiley-beers.gif" alt="smilies clinking beers"/>
            <img src="../../gifs/frontpage.gif" alt="made with microsoft frontpage"/>
          </div>
        </div>
        <span className="random-error">undefined</span>
      </StyledHeader>
    )
  }
}

export default Header