import React, { useContext, useMemo } from "react";
import { Typography, Collapse, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import useFileStore from "../../hooks/useFirestore";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext) || [];
  console.log({ rooms });

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách phòng" key={1}>
        {rooms?.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          onClick={handleAddRoom}
          icon={<PlusSquareOutlined />}
          className="add-room"
        >
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
//
