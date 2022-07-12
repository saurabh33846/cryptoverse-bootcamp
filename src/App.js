import "./styles.css";
import Container from "./Exercise1/Container";
import SideNav from "./Components/SideNav";
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
