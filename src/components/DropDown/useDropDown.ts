import { useMemo, useState } from "react";
import { DropdownProps } from "./DropDown.type";

export const useDropDown = (props: DropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { onDelete, onEdit } = props;

  const handleEdit = () => {
    console.log("Edit option selected");
    onEdit();
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log("Delete option selected");
    onDelete();
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", () => {
  //     setIsOpen(false);
  //   });
  // }, []);

  return {
    isOpen,
    handleEdit,
    handleDelete,
    handleClose,
    handleClick,
    anchorEl,
  };
};
