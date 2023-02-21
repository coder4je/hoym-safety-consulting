import { useState } from "react";
import {
  MenuToggleContainer,
  MenuToggle,
  MenuPlus,
  Menu,
  MenuItem,
  MenuItemStaffing,
  MenuItemStaffingIcon,
} from "./MenuElements";

function MenuSection() {
  const [rotate, setRotate] = useState(false);

  const rotateIcon = rotate ? "rotate(45deg)" : "rotate(0)";
  const showItemOne = rotate ? "translateY(-160px)" : "translateY(0)";
  const showItemTwo = rotate ? "translate(140px, -80px)" : "translateY(0)";
  const showItemThree = rotate ? "translate(140px, 80px)" : "translateY(0)";
  const showItemFour = rotate ? "translateY(160px)" : "translateY(0)";
  const showItemFive = rotate ? "translate(-140px, 80px)" : "translateY(0)";
  const showItemSix = rotate ? "translate(-140px, -80px)" : "translateY(0)";
  const scaleMenu = rotate ? "scale(1)" : "scale(0.9)";
  const zIndexMenu = rotate ? "100" : "-1";

  function handleToggle() {
    setRotate(!rotate);
  }
  return (
    <>
      <MenuToggleContainer>
        <MenuToggle onClick={handleToggle}>
          <MenuPlus
            style={{
              transform: rotateIcon,
              userSelect: "none",
            }}
            className="material-symbols-outlined">
            add
          </MenuPlus>
        </MenuToggle>
      </MenuToggleContainer>
      <Menu style={{ transform: scaleMenu }}>
        <MenuItem style={{ transform: showItemOne }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
        <MenuItem style={{ transform: showItemTwo }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
        <MenuItem style={{ transform: showItemThree }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
        <MenuItem style={{ transform: showItemFour }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
        <MenuItem style={{ transform: showItemFive }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
        <MenuItem style={{ transform: showItemSix }}>
          <MenuItemStaffing>
            <MenuItemStaffingIcon className="material-symbols-outlined">
              Person_add
            </MenuItemStaffingIcon>
          </MenuItemStaffing>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MenuSection;
