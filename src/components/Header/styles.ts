import styled from 'styled-components'

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  form {
    flex: 0.6;
    display: flex;
    padding: 0.1rem;
    margin: 0 1rem;
    border-radius: 3px;
    border: 1.2px solid;
    background-color: green;

    input {
      width: 100%;
      border: none;
      font-weight: 500;
      background: transparent;
    }
  }
`