import React, { useState } from "react";
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
  const [rotate, setRotate] = useState<boolean>();

  function handleToggle() {
    setRotate(!rotate);
  }

  return (
    <MenuContainer>
      <MenuToggleContainer>
        <MenuToggle onClick={handleToggle}>
          <MenuPlus toggle={rotate} className="material-symbols-outlined">
            add
          </MenuPlus>
        </MenuToggle>
      </MenuToggleContainer>
      <Menu toggle={rotate}>
        <MenuItems to="/staffing" className="showItemOne" toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Person_add
            </MenuItemIcon>
            <MenuItemText>STAFFING</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems to="/ssp" className="showItemTwo" toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              chrome_reader_mode
            </MenuItemIcon>
            <MenuItemText>SSP</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems to="training" className="showItemThree" toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              clinical_notes
            </MenuItemIcon>
            <MenuItemText>Training</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems
          to="/services/inspection"
          className="showItemFour"
          toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              Manage_search
            </MenuItemIcon>
            <MenuItemText>Library</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems
          to="/services/contracting"
          className="showItemFive"
          toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              app_shortcut
            </MenuItemIcon>
            <MenuItemText>My Account</MenuItemText>
          </MenuItem>
        </MenuItems>
        <MenuItems
          to="/services/management"
          className="showItemSix"
          toggle={rotate}>
          <MenuItem>
            <MenuItemIcon className="material-symbols-outlined">
              support_agent
            </MenuItemIcon>
            <MenuItemText>Contact Us</MenuItemText>
          </MenuItem>
        </MenuItems>
      </Menu>
    </MenuContainer>
  );
};

export default MenuSection;
