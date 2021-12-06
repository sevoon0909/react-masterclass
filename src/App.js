// import styled from "styled-components";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color:${(props)=>props.bgColor};
  width:100px;
  height:100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`

const Text = styled.span`
  color:white;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"/>
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;