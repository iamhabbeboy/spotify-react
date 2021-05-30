import { FriendsActivity } from './components/FriendsActivity';
import { Player } from './components/Player/Player';
import { PlayList } from './components/PlayBoard/PlayList';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App bg-indigo-100 text-white">
      <div className="flex">
        <Sidebar />
        <PlayList />
        <FriendsActivity />
      </div>
      <Player />
    </div>
  );
}

export default App;
