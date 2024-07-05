export interface HamburgerMenuProps {
  isOpen?: boolean;
  handleOpen: (state?: boolean) => void;
  className?: string;
  color?: string;
}
