import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"

export const Artist: React.FC = () => {
    return (
        <div className="bg-gray-800 h-24 rounded-md flex hover:bg-gray-600 cursor-pointer">
            <img
            className="h-full w-24 rounded-l-md"
            alt=""
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120"
          />
          <div className="pt-5 ml-4 w-6/12">
              <h2 className="font-bold">Beautiful Nubia</h2>
          </div>
          <div className="mt-5 w-3/12 text-center">
              <FontAwesomeIcon icon={faPlayCircle} className="text-xl text-green-500 shadow-lg" />
          </div>
        </div>
    )
}