import './Navbar.css';
import { AiFillVideoCamera } from "react-icons/ai";

const Navbar = () => {
    return(
      <nav className="nav">
          < AiFillVideoCamera className="logo" />
          <a href="/home" className="title">Filmweb-clone</a>
          <ul>
              <li>
                  <a href="/Kategorie">Kategorie</a>
              </li>
              <li>
                  <a href="/Filmy">Filmy</a>
              </li>
              <li>
                  <a href="/Seriale">Seriale</a>
              </li>
          </ul>
          <input className="search_box" placeholder="Wyszukaj"/>
          <button type="button">Zaloguj</button>
      </nav>
    );
}

export default Navbar;