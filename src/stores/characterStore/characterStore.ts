import { getAllCharacters } from "@/api";
import { PAGE_NUMBER } from "@/Constants";
import { Character, getCharactersParams } from "@/interfaces";
import { create } from "zustand";
import { CharacterStoreProps } from "./characterStore.type";

export const useCharacterStore = create<CharacterStoreProps>((set, get) => {
  const getCharactersData = async (params?: getCharactersParams) => {
    try {
      const currentState = get();
      set({ isLoading: true });
      const response =
        currentState.charactersBd.length > 0
          ? getCharacter(params)
          : await getAllCharacters();
      if (response) {
        set((state) => ({
          characters: response.response.data,
          charactersBd: response.response.data,
          pagination: {
            ...state.pagination,
            pageSize: response.response.pageSize,
            totalPage: response.response.totalPage,
          },
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  };

  const setPage = (newPage: number) => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        currentPage: newPage,
      },
    }));
  };

  const getCharacter = (params?: getCharactersParams) => {
    const search = params?.search ?? "";
    const type = params?.typeSearch ?? "name";
    const page = params?.page ?? 1;
    const currentState = get();

    const charactersFiltered = currentState.charactersBd.filter((item) =>
      search !== ""
        ? item[type].toUpperCase().includes(search.toUpperCase())
        : true
    );

    const charactersData =
      charactersFiltered?.slice((page - 1) * PAGE_NUMBER, page * PAGE_NUMBER) ??
      [];
    console.log(charactersData);
    set({
      characters: charactersData,
      pagination: {
        ...currentState.pagination,
        totalPage: Math.ceil(charactersFiltered.length / PAGE_NUMBER),
      },
    });
  };

  const addCharacter = (newCharacter: Character) => {
    set((state) => ({
      charactersBd: [...state.charactersBd, newCharacter],
      characters: [...state.characters, newCharacter],
    }));
  };

  const onDelete = (id: string) => {
    set((state) => ({
      charactersBd: state.charactersBd.filter((item) => item.id !== id),
      characters: state.characters.filter((item) => item.id !== id),
      pagination: {
        ...state.pagination,
        totalPage: Math.ceil((state.characters.length - 1) / PAGE_NUMBER),
      },
    }));
  };
  const onEdit = (character: Character) => {
    set((state) => ({
      charactersBd: state.charactersBd.map((item) =>
        item.id !== character.id ? item : character
      ),
      characters: state.characters.map((item) =>
        item.id !== character.id ? item : character
      ),
    }));
  };

  const getCharacterById = (id: string) => {
    return get().charactersBd.find((item) => item.id === id);
  };

  return {
    characters: [],
    charactersBd: [],
    setPage,
    getCharactersData,
    isLoading: false,
    getCharacter,
    addCharacter,
    onDelete,
    onEdit,
    getCharacterById,
  };
});
