import styled, {keyframes} from 'styled-components'

export const SideBarContainer = styled.div`
  li {
    display: flex;
    align-items: center;

    padding: 0.6rem 1.5rem;
    margin: 0.2rem 0;
    cursor: pointer;

    span {
      margin-left: 1rem;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.4px;
    }

    &:hover {
      background-color: $border-color;
    }
  }

  hr {
    background-color: $border-color;
  }

  &.open {
    transform: translateX(0);
  }
`
