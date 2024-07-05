import { PUBLIC_ROUTES } from "@/Constants";
import { useHovers } from "@/hooks";
import { useState } from "react";
import { HeaderProps } from "./Header.types";

export const useHeader = (props: HeaderProps) => {
  const { rightMenu } = props;

  const [refs, hovering] = useHovers();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linksArray = PUBLIC_ROUTES;

  return {
    hovering,
    refs,
    rightMenu,
    linksArray,
    toggleMenu,
    isMenuOpen,
  };
};
