import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  margin-bottom: 20px;
`

const StyledMenuList = styled.ul`
  padding-left: 35px;
`

const StyledMenuListItem = styled.li`
  margin-bottom: 20px;

  a {
    color: #EE252B;
    font-size: 20px;
  }
`

class Menu extends React.Component {
  render () {
    const links = this.props
    return (
      <StyledMenu>
        <StyledMenuList>
          {links && links.links.map((link, index) => (
            <StyledMenuListItem key={index}>
              <Link to={link.path}>{link.name}</Link>
            </StyledMenuListItem>
          ))}
          </StyledMenuList>
      </StyledMenu>
    ) 
  }
}

export default Menu