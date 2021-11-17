//! Dependant Plugin Utility
import { Link } from "react-router-dom";

//! Dependant Assets
import logoMarvel from "./assets/images/logo-marvel.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo-marvel" src={logoMarvel} alt="" />
      </Link>
      <div>Header</div>
      <input className="search" type="search" />
    </header>
  );
};

export default Header;
