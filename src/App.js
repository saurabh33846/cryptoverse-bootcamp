import "./styles.css";
import Container from "./Exercise3/Container";
import NavBar from "./Components/Navbar";

export default function App() {
  const currencyName = "bitcoin";
  const currencyPrice = "23USD"

 
  return (
    <div className="main">
      <NavBar/>
      <Container/>
    </div>
  );
}
