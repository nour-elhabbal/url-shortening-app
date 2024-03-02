import CustomButton from "./CustomButton";
import logo from "../assets/images/logo.svg";

import "../styles/Header.scss";
const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </nav>
      <div>
        <a href="#" className="logIn">
          Log in
        </a>

        <a href="#">
          <CustomButton isRounded={true} isWide={false} content={"Sign Up"} />
        </a>
      </div>
    </header>
  );
};

export default Header;
