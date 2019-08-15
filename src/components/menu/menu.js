import React from 'react'
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

const StyledMenuLink = styled.a`
  color: #2095B0;
`

class Menu extends React.Component {
  render () {
    const { menuLinks } = this.props

    return (
      <StyledMenu>
        <StyledMenuList>
          {menuLinks && menuLinks.map((link) => (
            <StyledMenuListItem key={link.object_id}>
              <StyledMenuLink href={link.url}>{link.title}</StyledMenuLink>
            </StyledMenuListItem>
          ))}
          </StyledMenuList>
      </StyledMenu>
    ) 
  }
}

export default Menu