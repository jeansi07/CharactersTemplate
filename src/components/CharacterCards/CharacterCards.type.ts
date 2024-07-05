import { Character } from "@/interfaces";

export interface CharacterCardProps extends Character {
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}
