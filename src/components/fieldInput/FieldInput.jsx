import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const FieldInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  borderVariant = "gray", // default gray border
  disable = false,
}) => {
  const borderClass =
    borderVariant === "blue" ? "border-[#1b7398]" : "border-[#ccc]";
  const isDateType = type === "date";
  const isPasswordType = type === "password";

  // Local state to display asterisks
  const [displayValue, setDisplayValue] = useState(value || "");

  // Handle masking for password
  const handleInputChange = (e) => {
    const realValue = e.target.value;
    if (isPasswordType) {
      setDisplayValue("*".repeat(realValue.length));
    } else {
      setDisplayValue(realValue);
    }
    onChange({ target: { name, value: realValue } }); // Send real value back to parent
  };

  useEffect(() => {
    if (isPasswordType) {
      setDisplayValue("*".repeat(value.length));
    } else {
      setDisplayValue(value);
    }
  }, [value, isPasswordType]);

  return (
    <div className={`relative w-full ${className}`}>
      <input
        id={id}
        name={name}
        type={isPasswordType ? "text" : type} // Keep as text to allow custom masking
        value={displayValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disable}
        className={`
          w-full 
          h-[35px] 
          outline-none  
          p-[5px] 
          border-[1px]
          relative
          ${className}
          ${borderClass}
          bg-white 
          text-extraSmallDescription 
          montserrat-medium
          ${isDateType ? "appearance-none" : ""}
        `}
        autoComplete={isPasswordType ? "new-password" : "on"}
      />
      {isDateType && (
        <FaCalendarAlt
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1b7398] pointer-events-none"
        />
      )}
    </div>
  );
};

export default FieldInput;
