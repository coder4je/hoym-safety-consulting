import { useState } from "react";
import StaffingService from "../StaffingService";
import {
  MenuToggleContainer,
  MenuToggle,
  MenuPlus,
  Menu,
  MenuItems,
  MenuItem,
  MenuItemIcon,
  MenuContainer,
  MenuItemText,
} from "./MenuElements";

const MenuSection: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);

  const showItemOne = rotate ? "translateY(-160px)" : "translateY(0)";
  const showItemTwo = rotate ? "translate(140px, -80px)" : "translateY(0)";
  const showItemThree = rotate ? "translate(140px, 80px)" : "translateY(0)";
  const showItemFour = rotate ? "translateY(160px)" : "translateY(0)";
  const showItemFive = rotate ? "translate(-140px, 80px)" : "translateY(0)";
  const showItemSix = rotate ? "translate(-140px, -80px)" : "translateY(0)";
  const scaleMenu = rotate ? "scale(1)" : "scale(0.9)";

  function handleToggle() {
    setRotate(!rotate);
  }
  return (
    <MenuContainer>
      <MenuToggleContainer>
        <MenuToggle onClick={handleToggle}>
          <MenuPlus rotate={rotate} className="material-symbols-outlined">
            add
          </MenuPlus>
        </MenuToggle>
      </MenuToggleContainer>
      <Menu style={{ transform: scaleMenu }}>
        <MenuItems to="/services/staffing" style={{ transform: showItemOne }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
            <MenuItemText>STAFFING</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems to="/services/training" style={{ transform: showItemTwo }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
          </MenuItem>
        </MenuItems>
        <MenuItems to="/services/drawing" style={{ transform: showItemThree }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
          </MenuItem>
        </MenuItems>
        <MenuItems
          to="/services/inspection"
          style={{ transform: showItemFour }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
          </MenuItem>
        </MenuItems>
        <MenuItems
          to="/services/contracting"
          style={{ transform: showItemFive }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
          </MenuItem>
        </MenuItems>
        <MenuItems to="/services/management" style={{ transform: showItemSix }}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
          </MenuItem>
        </MenuItems>
      </Menu>
    </MenuContainer>
  );
};

export default MenuSection;
