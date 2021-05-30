import React from "react";
import { PlayControl } from "./PlayControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faServer,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

export const Player: React.FC = () => {
  return (
    <div className="bg-custom absolute bottom-0 py-2 border-t border-gray-600 w-full flex">
      <div className=" w-3/12 flex pt-4">
        <div className="pl-5">
          <img
            className="rounded-md"
            alt=""
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=80"
          />
        </div>
        <div className="px-3 py-2">
          <h4>Iwaju</h4>
          <h5 className="text-tiny text-gray-400">Watti Boaz</h5>
        </div>
        <div className="pt-5 pl-5 text-green-600">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <PlayControl />
      <div className="w-3/12">
        <div className="w-6/12 pt-10 ml-auto flex">
          <div className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <div className="pl-3 text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faVolumeDown} />
          </div>
          <div className="px-2 w-32">
            <div className="bg-gray-600 h-1 rounded-md relative top-2">
              <div className="bg-gray-300 rounded-md w-1/2 block h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
