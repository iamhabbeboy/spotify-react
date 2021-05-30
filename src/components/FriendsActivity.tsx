import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"

export const FriendsActivity: React.FC = () => {
    return (
        <div className="bg-gray-800 w-2/12 pt-8 px-7">
            <h3 className="font-bold">Friend activity</h3>
            <p className="pt-3 text-sm text-gray-400">Connect with friends to see what your friends are playing</p>
            <button className="bg-blue-500 p-4 uppercase text-tiny font-bold rounded-full w-full mt-5"> 
            <FontAwesomeIcon icon={faAddressBook} /> connect with facebook </button>
            <p className="pt-5 text-tiny text-gray-400">We'll never post anything without your permission. Show and hide Friend Activity from Settings.</p>
        </div>
    )
}
