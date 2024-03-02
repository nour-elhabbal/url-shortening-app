import "../styles/CustomButton.scss";

const CustomButton = ({
  isRounded,
  isWide,
  onClick,
  content,
  customId,
  additionalClass,
}) => {
  return (
    <button
      id={customId}
      className={`customButton ${additionalClass} ${
        isRounded ? "rounded" : ""
      } ${isWide ? "wide" : ""} 
      `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default CustomButton;
