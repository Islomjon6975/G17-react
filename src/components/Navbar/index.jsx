import React from 'react'
import { Link, NavLink, useNavigate, Outlet } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, NavLinks, Wrapper } from './style'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <NavLinks>
          {
            navbar.map((value) => !value.hidden && (
              <li value={value.id}><Link to={value.path}>{value.title}</Link></li>
            ))
          }
          <button onClick={() => navigate('/login')}>Login</button>
        </NavLinks>
      </Wrapper>
      <Wrapper style={{display: 'flex', flexDirection: 'column'}}>
        <Outlet />
        <h1>Footer</h1>
      </Wrapper>
    </Container>
  )
}
