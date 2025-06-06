import { ClockLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <ClockLoader
        className="mx-auto"
        color="#d95d39"
        size={150}
        speedMultiplier={1}
      />
      <p className="font-bold text-2xl mt-4 text-primary">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingSpinner;
