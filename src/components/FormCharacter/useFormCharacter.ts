import { Character } from "@/interfaces";
import { useCharacterStore } from "@/stores";
import { FormikHelpers, useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import * as Yup from "yup";
import { CharacterBody, FormCharacterProps } from "./FormCharacter.type";
export const useFormCharacter = (props: FormCharacterProps) => {
  const { characterId, closeFormCharacter, setAlert } = props;
  const [isAlive, setIsAlive] = useState(true);
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    description: Yup.string().required("La description es requerido"),
    birthDate: Yup.string().required("El año de nacimiento es requerido"),
  });

  const { addCharacter, charactersBd, getCharacterById, onEdit } =
    useCharacterStore();

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAlive(e.target.checked);
  };

  const onSubmit = async (
    values: CharacterBody,
    formControl: FormikHelpers<CharacterBody>
  ): Promise<void> => {
    try {
      const newCharacter: Character = {
        birthDate: values.birthDate ?? new Date(),
        description: values.description,
        deathDate: values.deathDate ?? undefined,
        name: values.name,
        id: characterId ?? String(charactersBd.length + 1),
      };
      const reader = new FileReader();
      reader.onloadend = () => {
        newCharacter.image =
          values.image !== null ? (reader.result as string) : undefined;
      };

      reader.readAsDataURL(values.image as File);
      if (characterId) {
        onEdit(newCharacter);
      } else {
        addCharacter(newCharacter);
      }
      setAlert({
        severity: "success",
        show: true,
        message: "Character save",
      });
    } catch (error) {
      console.error(error);
      setAlert({
        severity: "error",
        show: true,
        message: "error",
      });
    } finally {
      formControl.resetForm();
      formControl.setSubmitting(false);
      closeFormCharacter();
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      birthDate: null,
      deathDate: null,
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values: CharacterBody, formControl) => {
      onSubmit(values, formControl);
    },
  });

  const getValuesCharacterEdit = async (id: string) => {
    try {
      const character = getCharacterById(id);
      const newCharacter: CharacterBody = {
        birthDate: character?.birthDate ?? new Date(),
        description: character?.description ?? "",
        deathDate: character?.deathDate ?? undefined,
        name: character?.name ?? "",
      };
      const response = await fetch(character?.image ?? "");
      const metadata = {
        type: "image/jpeg",
      };
      const file = new File([await response.blob()], `${id}.jpg`, metadata);
      newCharacter.image = character?.image ? file : null;

      formik.setValues(newCharacter);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (characterId) {
      getValuesCharacterEdit(characterId);
    }
  }, [characterId]);

  return {
    validationSchema,
    handleCheckboxChange,
    isAlive,
    formik,
    setAlert,
    alert,
  };
};
