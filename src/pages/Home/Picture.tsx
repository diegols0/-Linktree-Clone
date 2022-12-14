import styled from "styled-components"

export default function Picture () {

  const IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ3f5zuxN7itDquM2lm0UjCG9oJmFai_TMw&usqp=CAU'

  return <Image src={IMAGE_URL} />
}

const Image = styled.img`
  background-color: red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`