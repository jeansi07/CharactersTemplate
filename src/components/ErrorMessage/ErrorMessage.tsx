import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const ErrorMessage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col m-auto">
      <div className="flex justify-center">
        <img
          className="w-96"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        />
      </div>
      <div>
        <p className="text-3xl font-bold text-primary-normal text-center">
          404 Not Found
        </p>
        <p className="text-6xl font-bold text-primary-normal">
          Whoops! That page doesn’t exist.
        </p>
      </div>
      <div className="flex justify-center mt-7">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Come back home
        </Button>
      </div>
    </div>
  );
};
