import styled, {css} from "styled-components";

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  /* width: 400px; */
  min-width: 250px;
  background: white; 
  padding: 15px;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #ffffff;
  padding: 60px;

  ${common}

  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  margin-bottom: 15px;
`

const Title = styled.h3`
  font-size: 24px;
  color: #000000;
  white-space: nowrap;
`

const Price = styled.h4`
  font-size: 22px;
  color: #000000;
`

const Button = styled.button`
  background: crimson;
  width: 100%;
  height: 40px;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  ${common}

  :active {
    transform: scale(0.97);
  }
`

export {Container, ImageWrapper, Image, Content, Title, Price, Button}