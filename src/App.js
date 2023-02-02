import Home from "./home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Serial from "./components/Serial";
import { isExpired } from "react-jwt";
import Details from "./components/Details";
import Dodaj from "./components/Dodaj";
import Kategoria from "./components/Kategoria";

function App() {
  return (
      <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                {isExpired(localStorage.getItem("token")) ? <Route path="/login" element={<Login/>}/> : null}
                <Route exact path="/serial" element={<Serial/>}></Route>
                <Route exact path="/details/:id" element={<Details/>}></Route>
                <Route exact path="/dodaj" element={<Dodaj/>}></Route>
                <Route exact path="/kategoria" element={<Kategoria/>}></Route>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
