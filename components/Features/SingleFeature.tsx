import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title } = feature;
  return (
    <div className="w-full flex flex-col items-center">
      {/* Container for the icon (image) */}
      <div
        className="mb-5 h-[200px] w-[200px] flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-125"
      >
        <div className="h-full w-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      {/* Title */}
      <h3 className="mb-2 text-center text-l font-bold text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
        {title}
      </h3>

      
    </div>
  );
};

export default SingleFeature;
