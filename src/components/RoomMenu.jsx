import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { rooms } from "../data/data";

export default function RoomMenu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronDown} />}>
        Rooms
      </MenuButton>
      <MenuList>
        {rooms.map((room) => (
          <MenuItem as="a" href={room.path}>
            {room.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
