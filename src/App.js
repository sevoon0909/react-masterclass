
import styled, {keyframes, Keyframes} from "styled-components";

const Wrapper = styled.div `
  display: flex;
`
const roateAnimation = keyframes` 
  0%{
    transform:rotate(0deg);
  }
  50%{
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`

const Box = styled.div` 
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation:${roateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    font-size: 36px;
    &:hover{
      font-size:40px;
    }
    &:active{
      font-size:5px;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😄</span>
      </Box>
    </Wrapper>
  );
}

export default App;
