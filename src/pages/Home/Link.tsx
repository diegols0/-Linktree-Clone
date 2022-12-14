import styled, { StyledComponent } from "styled-components"

export default function Link () {
  return <Wrapper>Link</Wrapper>
}

const Wrapper: StyledComponent<"div", any> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 92%;
  height: 55px;
  cursor: pointer;
  border-radius: 30px;
  transition-duration: 300ms;
  border: solid 1px #fff;

  &:hover {
    background-color: #fff;
    color: rgb(93, 74, 161);
    transition-duration: 500ms;
  }
`