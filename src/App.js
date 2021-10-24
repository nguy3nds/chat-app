import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";
import { db } from "./firebase/config";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={ChatRoom} path="/" />
          </Switch>
          <AddRoomModal />
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
