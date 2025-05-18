import Logo from "../../assets/Logo.png";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <section className="section">
      <div className="grid-container header-container">
        <div className="header-img-container">
          <img className="headerImg" src={Logo} alt="error" />
        </div>
        <Nav />
      </div>
    </section>
  );
};

export default Header;
