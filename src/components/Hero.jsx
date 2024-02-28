import CustomButton from "./CustomButton";
import heroImg from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are preforming
        </p>
        <CustomButton isRounded={true} isWide={true} content={"Get Started"} />
      </div>
      <img src={heroImg} alt="Man sitting on a desk and working" />
    </div>
  );
};

export default Hero;
