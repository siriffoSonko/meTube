import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = styled.div`


  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #8257e6;
  border-radius: 8px;
  border: 0;

  color: #FFF;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  * {
    border: 1px solid green;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #ffff;
    width: 100%;
    height: 100%;
    background-color: aqua;
  }
`
export const MainScreenContainer = styled.div`
  * {

    border: 1px solid yellow;
    height: 100%;
  }

  display: flex;
  height: 90vh;
`
