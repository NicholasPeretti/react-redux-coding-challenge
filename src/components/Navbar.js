import React from 'react'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import NavMenuItem from './NavMenuItem'
import Style from '../style'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid ${Style.colors.gray};
  padding: 0px ${Style.spacing.padding3};
`

const Navbar = () => (
  <header>
    <StyledNav>
      <NavLogo />
      <NavMenu>
        <NavMenuItem>Purchase</NavMenuItem>
        <NavMenuItem>My Orders</NavMenuItem>
        <NavMenuItem>Sell</NavMenuItem>
      </NavMenu>
    </StyledNav>
  </header>
)

export default Navbar
