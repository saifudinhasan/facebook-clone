import './App.css';
import Feed from "./components/main/Feed";
import Header from "./components/header/Header";
import Login from './components/Login';
import Sidebar from "./components/sidebar/Sidebar";
import SidebarRight from "./components/sidebar/SidebarRight";
// import Widget from "./Widget";


// CONTEXT API
import { useStateValue } from './contexts/StateProvider';

function App() {

  const { user } = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <SidebarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
