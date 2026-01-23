import {
  FaUserFriends,
  FaExclamationCircle,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { cardData } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const iconMap = {
  FaUserFriends: <FaUserFriends size={30} color="#fff" />,
  FaExclamationCircle: <FaExclamationCircle size={30} color="#fff" />,
  FaHandHoldingUsd: <FaHandHoldingUsd size={30} color="#fff" />,
};

const CardComponent = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px]">
      {cardData.map((card, index) => (
        <div
          key={index}
          onClick={() => {
            if (card.path) {
              console.log("Navigating to:", card.path);
              navigate(card.path);
            }
          }}
          className="flex w-full overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300"
        >
          {/* Left */}
          <div
            className="flex flex-col justify-center flex-[2] text-white p-[10px]"
            style={{ backgroundColor: card.leftColor }}
          >
            <h2 className="text-text-smallSubTitle montserrat-bold leading-[20px]">
              {card.number}
            </h2>
            <span className="text-sm mt-1">{card.headtitle}</span>
          </div>

          {/* Right */}
          <div
            className="flex items-center justify-center flex-1"
            style={{ backgroundColor: card.rightColor }}
          >
            {iconMap[card.rightIcon]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
