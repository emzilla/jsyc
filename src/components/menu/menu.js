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
    const { menuLinks } = this.props

    return (
      <StyledMenu>
        <StyledMenuList>
          {menuLinks && menuLinks.map((link) => (
            <StyledMenuListItem key={link.object_id}>
              <Link activeStyle={{color: '#2095B0'}} to={link.url}>{link.title}</Link>
            </StyledMenuListItem>
          ))}
          </StyledMenuList>
      </StyledMenu>
    ) 
  }
}

export default Menu