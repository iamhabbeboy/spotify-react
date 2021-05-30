import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faMusic, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-black h-screen w-2/12">
      <ul className="ml-5 mt-10">
        <li className="text-gray-400 py-3">
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className="text-gray-400 py-3">
          <FontAwesomeIcon icon={faSearch} /> Search
        </li>
        <li className="text-gray-400 py-3">
        <FontAwesomeIcon icon={faMusic} /> Your Library
        </li>
      </ul>
      <ul className="ml-5 mt-8 mr-5">
        <li className="text-gray-400 py-3">
          <FontAwesomeIcon icon={faPlusSquare} /> Create Playlist
        </li>
        <li  className="text-gray-400 py-3 border-b border-gray-700">
          Liked Songs
        </li>
      </ul>
    </div>
  );
};
