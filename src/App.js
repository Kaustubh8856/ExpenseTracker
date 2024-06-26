import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 30px 0 10px;
`;
const Header = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
