import React, { useContext, useEffect, useMemo, useState } from "react";
import useFileStore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFileStore("rooms", roomsCondition);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId),
    [selectedRoomId, rooms]
  );

  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom]);

  const members = useFileStore("users", usersCondition);

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
