const CustomButton = ({
  isRounded,
  isWide,
  isTransparent,
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
      } ${isWide ? "wide" : ""} ${isTransparent ? "transparent" : ""}
      `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default CustomButton;
