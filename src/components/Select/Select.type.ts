import { SelectChangeEvent } from "@mui/material";

export interface CustomSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: SelectChangeEvent<string>) => void;
}
