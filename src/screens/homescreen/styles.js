import styled, {keyframes} from 'styled-components'

export const ScreenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-flow: row;
  border-style: solid;
  min-width: 100%;
`
export const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
