import CustomButton from "./CustomButton";
import logo from "../assets/images/logo.svg";

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
        <CustomButton
          isTransparent={true}
          isWide={false}
          content={<a href="#">Log in</a>}
        />

        <CustomButton
          isRounded={true}
          isWide={false}
          content={<a href="#">Sign up</a>}
        />
      </div>
    </header>
  );
};

export default Header;
