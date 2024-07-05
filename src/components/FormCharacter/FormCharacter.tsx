import clsx from "clsx";
import { isEmpty } from "lodash";
import { Input } from "../Input";
import { FormCharacterProps } from "./FormCharacter.type";
import { useFormCharacter } from "./useFormCharacter";

export const FormCharacter = (props: FormCharacterProps) => {
  const { isAlive, handleCheckboxChange, formik } = useFormCharacter(props);

  return (
    <div className="max-w-md w-[1000px] mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name ? formik.errors.name : undefined}
            required
          />
        </div>

        <div className="mb-4">
          <Input
            label="Description"
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={
              formik.touched.description ? formik.errors.description : undefined
            }
            required
          />
        </div>
        <div className="mb-4">
          <Input
            accept="image/*"
            type="file"
            label="imagen"
            id="image"
            name="image"
            autoComplete="name"
            customType="googleInput"
            onChange={(e) =>
              formik.setFieldValue(
                "image",
                e.target.files ? e.target.files[0] : null
              )
            }
            onBlur={formik.handleBlur}
            error={formik.touched.image ? formik.errors.image : undefined}
            required
          />
        </div>

        <div className="w-full gap-4 mb-4">
          <Input
            type="date"
            label="Fecha de nacimiento"
            id="birthDate"
            name="birthDate"
            autoComplete="shipping bday-day webauthn"
            customType="googleInput"
            onChange={(evt) => {
              formik.setFieldValue("birthDate", new Date(evt.target.value));
            }}
            onBlur={formik.handleBlur}
            value={
              formik.values.birthDate
                ? formik.values.birthDate.toISOString().slice(0, 10)
                : undefined
            }
            error={
              formik.touched.birthDate
                ? (formik.errors.birthDate as string)
                : undefined
            }
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            <input
              type="checkbox"
              checked={isAlive}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Está vivo
          </label>
        </div>

        <div className="mb-4">
          <div className="w-full gap-4">
            <Input
              disabled={isAlive}
              type="date"
              label="Fecha de muerte"
              id="deathDate"
              name="deathDate"
              autoComplete="shipping bday-day webauthn"
              customType="googleInput"
              onChange={(evt) =>
                formik.setFieldValue("deathDate", new Date(evt.target.value))
              }
              onBlur={formik.handleBlur}
              value={
                formik.values.deathDate
                  ? formik.values.deathDate.toISOString().slice(0, 10)
                  : undefined
              }
              error={
                formik.touched.deathDate
                  ? (formik.errors.deathDate as string)
                  : undefined
              }
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting || !isEmpty(formik.errors)}
          className={clsx(
            "w-full px-4 py-2 mt-4",
            "bg-blue-500 text-white font-bold rounded-lg",
            "hover:bg-blue-700"
          )}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
