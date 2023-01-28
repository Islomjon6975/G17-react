import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 80px;
  background-color: #222;
  width: 100%;
  color: #fff;
  list-style-type: none;
  font-size: 24px;
`


export {Container, Wrapper, NavLinks}