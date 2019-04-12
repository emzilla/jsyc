import React from 'react'
import styled from 'styled-components'

const topBannerBG = `../../gifs/sunset-banner.gif`

const StyledTopBanner = styled.section`
  background-image: url(${topBannerBG});
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: solid 4px #ccc;
  box-shadow: inset 0px -1px 0px white, inset 0px -2px 0px #ccc, 0px 1px 0px #8c8c8c, 0px 2px 0px #000;
  position: relative;
  width: 100%;
  z-index: 0;
`

const StyledTopBannerContent = styled.div`
  text-align: right;
  padding: 15px;
  font-family: 'Comic Sans MS', Arial, sans-serif;
  font-size: 14px;
  color: #FFFF00;
`


class TopBanner extends React.Component {
  render() {
    return (
      <StyledTopBanner>
        <StyledTopBannerContent>
          <p>"Just a dream and the wind to carry me..."</p>
        </StyledTopBannerContent>
      </StyledTopBanner>
    )
  }
}

export default TopBanner