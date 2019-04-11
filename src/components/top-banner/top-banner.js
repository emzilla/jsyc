import React from 'react'
import styled from 'styled-components'

const topBannerBG = `../../gifs/sunset-banner.gif`

const StyledTopBanner = styled.section`
  background-image: url(${topBannerBG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
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