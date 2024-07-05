import {
  AlertMessagesProps,
  Button,
  CharacterCard,
  CustomModal,
  CustomSelect,
  FormCharacter,
  Input,
  PaginationView,
} from "@/components";
import { getCharactersParams, OptionsSearch } from "@/interfaces";
import { useCharacterStore } from "@/stores";
import { Alert, Snackbar } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CharactersCardsLoader } from "./components";

const options = [
  { value: "name", label: "Name" },
  { value: "id", label: "Id" },
];

export const Home = () => {
  const {
    characters,
    getCharactersData,
    isLoading,
    pagination,
    setPage,
    onDelete,
  } = useCharacterStore();

  const [openAddForm, setOpenAddForm] = useState(false);
  const [alert, setAlert] = useState<AlertMessagesProps>({
    show: false,
    message: "",
    severity: "success",
  });
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [search, setSearch] = useState("");
  const [characterId, setCharacterId] = useState<string | undefined>(undefined);

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (pagination?.currentPage && pagination?.currentPage !== 1) {
      setPage(1);
    }
  };

  const closeFormCharacter = () => {
    setCharacterId(undefined);
    setOpenAddForm(false);
  };

  useEffect(() => {
    const characterParams: getCharactersParams = {};
    characterParams.page = pagination?.currentPage;
    characterParams.search = search;
    characterParams.typeSearch = selectedOption as OptionsSearch;
    getCharactersData(characterParams);
  }, [getCharactersData, pagination?.currentPage, search, selectedOption]);

  return (
    <div className={clsx("flex", "flex-col", "flex-1", "py-5", "px-4")}>
      <div
        className={clsx(
          "flex",
          "max-md:flex-col",
          "max-md:gap-y-3",
          "flex-1",
          "gap-x-4"
        )}
      >
        <CustomSelect
          options={options}
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        />
        <Input
          type="text"
          label="Search"
          value={search}
          onChange={handleInputSearch}
          customType="googleInput"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 lg:w-72 max-md:w-full"
          placeholder="Ingresa tu texto aquí..."
        />

        <div
          className={clsx(
            "flex",
            "lg:justify-end",
            "justify-center",
            "flex-1",
            "max-md:w-full"
          )}
        >
          <Button onClick={() => setOpenAddForm(true)} variant="outline">
            Add character
          </Button>
        </div>
      </div>

      <PaginationView
        loadingState={<CharactersCardsLoader />}
        classNameContainer={clsx("gap-2", "p-2")}
        onChangePage={(index) => {
          setPage(index);
        }}
        initialIndex={pagination?.currentPage}
        isLoading={isLoading}
        data={characters}
        size={pagination?.totalPage}
        renderComponent={(item, index) => (
          <CharacterCard
            onEdit={(id) => setCharacterId(id)}
            onDelete={onDelete}
            key={`${item.name}-${index}`}
            {...item}
          />
        )}
      />

      <CustomModal
        className="flex justify-center items-center"
        visible={openAddForm || Boolean(characterId)}
        onClose={closeFormCharacter}
      >
        {openAddForm || Boolean(characterId) ? (
          <FormCharacter
            setAlert={setAlert}
            closeFormCharacter={closeFormCharacter}
            characterId={characterId}
          />
        ) : (
          <></>
        )}
      </CustomModal>
      {alert.show && (
        <>
          <Snackbar
            open={alert.show}
            autoHideDuration={6000}
            onClose={() => setAlert({ ...alert, show: false })}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={() => setAlert({ ...alert, show: false })}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
};
