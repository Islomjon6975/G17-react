import styled from "styled-components";
import { Link } from 'react-router-dom'


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 80px;

  background: #111111;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`

Ul.Li = styled.li`
  color: white;
  list-style-type: none;
  font-size: 22px;
`

const Url = styled(Link)`
  color: white;
`

export {Container, Wrapper, Ul, Url}