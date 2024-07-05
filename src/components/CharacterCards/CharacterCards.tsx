import clsx from "clsx";
import { Dropdown } from "../DropDown";
import { CharacterCardProps } from "./CharacterCards.type";

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  description,
  birthDate,
  deathDate,
  image,
  id,
  onDelete,
  onEdit,
}) => {
  return (
    <div
      className={clsx(
        "w-full",
        "h-full",
        "flex",
        "items-center",
        "rounded-xl",
        "overflow-hidden",
        "shadow-lg",
        "bg-white",
        "relative"
      )}
    >
      <img
        className={clsx(
          "object-cover",
          "w-48",
          "h-48",
          "object-cover",
          "flex",
          "flex-shrink-0"
        )}
        src={
          image ??
          "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
        }
        alt={`${name}-profile`}
      />
      <div className="absolute right-1 top-2 ">
        <Dropdown
          onDelete={() => onDelete?.(id)}
          onEdit={() => {
            onEdit?.(id);
          }}
        />
      </div>
      <div className={clsx("flex", "flex-col", "px-3")}>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p
          className={clsx(
            "text-gray-700",
            "text-base",
            "line-clamp-3",
            "hover:overflow-y-auto",
            "hover:text-clip",
            "custom-scrollbar"
          )}
        >
          {description}
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <strong>Born: </strong> {birthDate.toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Died: </strong>
            {deathDate ? deathDate.toLocaleDateString() : "Still Alive"}
          </p>
        </div>
      </div>
    </div>
  );
};
