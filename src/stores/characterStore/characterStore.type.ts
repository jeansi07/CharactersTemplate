import { Character, getCharactersParams } from "@/interfaces";

export interface CharacterStoreProps {
  characters: Character[];
  charactersBd: Character[];
  pagination?: Partial<PaginationCharacter>;
  getCharactersData: (params?: getCharactersParams) => Promise<void>;
  setPage: (newPage: number) => void;
  isLoading: boolean;
  getCharacter: (params?: getCharactersParams) => void;
  addCharacter: (newCharacter: Character) => void;
  onDelete: (id: string) => void;
  onEdit: (character: Character) => void;
  getCharacterById: (id: string) => Character | undefined;
}

export interface PaginationCharacter {
  pageSize: number;
  currentPage: number;
  totalPage: number;
}
