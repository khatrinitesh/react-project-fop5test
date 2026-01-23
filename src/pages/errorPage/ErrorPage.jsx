import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Button onClick={handleBack} label="Go Back" />
    </div>
  );
};

export default ErrorPage;
