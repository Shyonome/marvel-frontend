//! Dependant Plugin Utility
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="center-text" >Home Page</div>
      <div className="home-page">
        <Link className="links" to="/comics">
          <div className="to-comics-page" >Comics</div>
        </Link>
        <Link className="links" to="/characters">
          <div className="to-characters-page" >Characters</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
