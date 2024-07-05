import { Menu, MenuItem } from "@mui/material";
import clsx from "clsx";
import { DropdownProps } from "./DropDown.type";
import { useDropDown } from "./useDropDown";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    handleClick,
    handleClose,
    handleDelete,
    handleEdit,
    isOpen,
    anchorEl,
  } = useDropDown(props);

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex justify-center w-5"
        type="button"
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
      >
        <div className={clsx("flex flex-col gap-y-1")}>
          <div className="rounded-full bg-gray-500 w-[3px] h-[3px]" />
          <div className="rounded-full bg-gray-500 w-[3px] h-[3px] " />
          <div className="rounded-full bg-gray-500 w-[3px] h-[3px]" />
        </div>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
};
