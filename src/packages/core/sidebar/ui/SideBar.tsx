import { SideBarProps } from "../types";
import { slide as Menu } from "react-burger-menu";
import "../styles/style.css";

export default function SideBarUI({
  children,
  styles,
  isOpen,
  right,
  customBurgerIcon,
  width,
  id,
  setIsOpen,
}: SideBarProps) {
  return (
    <Menu
      width={width}
      right={right}
      customBurgerIcon={customBurgerIcon}
      id={id}
      styles={styles}
      isOpen={isOpen}
      onClose={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {children ? (
        children
      ) : (
        <>
          <a className="menu-item" href="/">
            Home
          </a>

          <a className="menu-item" href="/burgers">
            Burgers
          </a>

          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>

          <a className="menu-item" href="/desserts">
            Desserts
          </a>
        </>
      )}
    </Menu>
  );
}
