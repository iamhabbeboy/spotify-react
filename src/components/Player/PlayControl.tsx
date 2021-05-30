import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRandom,
  faStepBackward,
  faPlayCircle,
  faStepForward,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

export const PlayControl: React.FC = () => {
  return (
    <div className="w-6/12 text-white">
      <div className="flex text-center place-content-center">
        <div className="p-5 text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faRandom} />
        </div>
        <div className="p-5 text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faStepBackward} />
        </div>
        <div className="p-5 relative bottom-2">
          <FontAwesomeIcon icon={faPlayCircle} className="text-xl" />
        </div>
        <div className="p-5 text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faStepForward} className="" />
        </div>
        <div className="p-5 text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faRedo} className="" />
        </div>
      </div>
      <div className="flex mx-auto w-10/12">
        <div className="text-tiny pr-2 relative bottom-2 text-gray-400">0:11</div>
        <div className="bg-gray-600 h-1 rounded-md w-10/12">
          <div className="bg-gray-300 rounded-md w-1/2 block h-1"></div>
        </div>
        <div className="text-tiny pl-2 relative bottom-2 text-gray-400">4:11</div>
      </div>
    </div>
  );
};
