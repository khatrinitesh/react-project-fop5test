// Button.js
const Button = ({
  label,
  onClick,
  isLoading = false,
  className = "",
  type = "submit",
  variant = "color1", // default theme
}) => {
  const baseStyles =
    "px-[10px] h-[35px]  block mx-auto text-extraSmallDescription montserrat-medium cursor-pointer";

  const variantStyles = {
    color1: "bg-[#1b7398] text-white",
    color2: "bg-[#ffbd59] text-[#122159]",
    color3: "bg-[#aed7a8] text-[#122159]",
    color4: "bg-[#010d4a] text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles}  ${variantStyles[variant]} ${className}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
