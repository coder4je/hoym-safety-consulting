import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

interface SidebarProps {
  toggle: (event: React.MouseEvent<HTMLDivElement>) => void;
  isOpen?: boolean;
}

// Typescript props to sidebar!!
const Sidebar = (props: SidebarProps) => {
  const { toggle, isOpen } = props;

  console.log("isOpen:", isOpen);
  if (isOpen) {
    console.log("Is open");
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={() => toggle}>
            HOME
          </SidebarLink>
          <SidebarLink to="home" onClick={() => toggle}>
            SERVICE
          </SidebarLink>
          <SidebarLink to="contact" onClick={() => toggle}>
            CONTACT
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
