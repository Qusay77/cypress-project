interface Style {
  bmBurgerBars: Partial<CSSStyleDeclaration>;
  bmBurgerButton: Partial<CSSStyleDeclaration>;
  bmCross: Partial<CSSStyleDeclaration>;
  bmCrossButton: Partial<CSSStyleDeclaration>;
  bmItemList: Partial<CSSStyleDeclaration>;
  bmMenuWrap: Partial<CSSStyleDeclaration>;
  bmMenu: Partial<CSSStyleDeclaration>;
  bmMorphShape: Partial<CSSStyleDeclaration>;
  bmOverlay: Partial<CSSStyleDeclaration>;
}

export interface SideBarProps {
  styles?: Partial<Style> | undefined;
  children?: React.ReactNode;
  isOpen?: boolean | undefined;
  width?: number | string | undefined;
  right?: boolean | undefined;
  customBurgerIcon?: JSX.Element | false | undefined;
  id?: string | undefined;
  setIsOpen?: () => void | undefined;
}
