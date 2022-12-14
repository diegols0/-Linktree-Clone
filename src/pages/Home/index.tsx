import styled, { StyledComponent } from "styled-components"
import Picture from "./Picture"
import Link from "./Link"
import Title from "./Title"

export default function Home () {
  return (
    <Wrapper>
      <Profile>
        <Picture />
        <Title />
      </Profile>
      <Link />
    </Wrapper>
  )
}

const Wrapper: StyledComponent<"div", any> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  max-width: 590px;
  margin-top: 80px;
  height: auto;
`

const Profile: StyledComponent<"div", any> = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`