export type OptionsSearch = "id" | "name";
export interface Character {
  id: string;
  name: string;
  image?: string;
  description: string;
  birthDate: Date;
  deathDate?: Date;
}

export interface getCharactersParams {
  search?: string;
  typeSearch?: OptionsSearch;
  page?: number;
}
