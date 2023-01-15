import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* background-color: #999; */
  border: 1px solid #999;
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 120px;
  padding: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`

const Title = styled.h3`
  width: 200px;
  max-height: 45px;
  overflow: hidden;
  display: flex;
`

const Price = styled.h4``

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
`

const Button = styled.button`
  min-width: 30px;
  height: 30px;
  background: #222222;
  border: none;
  outline: none;
  color: white;
  border-radius: 3px;
  padding: 0 10px;

  :active {
    transform: scale(0.97);
  }
`


export {Container, Box, ImageWrapper, Image, Wrapper, Title, Price, Button}