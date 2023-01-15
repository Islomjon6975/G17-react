import styled from "styled-components";

const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;

  min-height: calc(100vh - 80px);
  height: 100%;

`

Wrapper.Box = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`

const Search = styled.input`
  width: 600px;
  height: 40px;
  border: 1px solid white;
  color: white;
  background-color: #262626;
  margin: 20px;
  padding-left: 20px;
  outline: none;
`

const ProductsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`

export {Container, Wrapper, Search, ProductsContainer}