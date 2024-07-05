import { Backbone } from "@/components";
import clsx from "clsx";
import { times } from "lodash";

export const CharactersCardsLoader = () => {
  return (
    <div
      className={clsx(
        "w-full",
        "h-full",
        "grid",

        "grid-cols-[repeat(auto-fill,_minmax(max(240px,_98%/3),_1fr))]",

        "gap-2"
      )}
    >
      {times(9, (n) => (
        <Backbone key={n} width="100%" height="192px" borderRadius="12px" />
      ))}
    </div>
  );
};
