import styled from "styled-components";

const Container = styled.div`
  width: 100%; // view-port
  background-color: #262626;

  display: flex;
  justify-content: center;
  align-items: center;

  .ant-drawer-content-wrapper {
    width: 550px !important;
    position: fixed !important;
  }

  .ant-drawer-body {
    display: flex !important;
    flex-direction: column !important;
    gap: 15px !important;
  }
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

const Title = styled.h3`
  font-size: 32px;
  color: #ffffff;
  font-weight: 700;
  
`

const Basket = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
`

const Total = styled.div`
  font-size: 32px;
  font-weight: 700;
  position: fixed;
  bottom: 0;
  right: 0;
  background: white;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  width: 550px !important;

`

export {Container, Wrapper, Title, Basket, Total}