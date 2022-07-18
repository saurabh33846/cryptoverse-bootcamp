import "./styles.css";
import Container from "./Exercise3/Container";
import NavBar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";


export default function App() { 
  return (
    <div className="main">
        <NavBar/>
        <Container/>
    </div>
  );
}
