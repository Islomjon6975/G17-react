import React from 'react'
import { navbar } from '../../utils/navbar'
import { Container, Ul, Url, Wrapper } from './style'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Ul>
          {
            navbar.map((value) => {
              return !value.hidden && (
                <Ul.Li key={value.id}><Url to={value.path}>{value.title}</Url></Ul.Li>
              )
            })
          }
        </Ul>
      </Wrapper>
    </Container>
  )
}
