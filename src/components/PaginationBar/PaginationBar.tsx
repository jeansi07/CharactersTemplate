import clsx from "clsx";
import { Button } from "../Button";
import { PaginationBarsProps } from "./PaginationBar.type";
import { usePaginationBar } from "./usePaginationBar";

export const PaginationBar = (props: PaginationBarsProps) => {
  const { onNext, onPrevious, renderPages, currentIndex, onPagination } =
    usePaginationBar(props);

  return (
    <div
      className={clsx(
        "flex",
        "w-full",
        "justify-between",
        "items-center",
        "px-4"
      )}
    >
      <Button onClick={onPrevious(currentIndex)} variant="transparent">
        Previous
      </Button>
      <ul className={clsx("flex", "overflow-hidden", "gap-7")}>
        {renderPages.map((item, index) => (
          <li
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "w-10",
              "h-10",
              "relative",
              currentIndex === item &&
                clsx(
                  "after:content-['']",
                  "after:w-full",
                  "after:h-[2px]",
                  "after:bg-primary-normal",
                  "after:absolute",
                  "after:top-0",
                  "after:left-0"
                )
            )}
            key={index}
          >
            {item === "..." || typeof item === "string" ? (
              <span
                className={clsx(
                  "w-full",
                  "h-full",
                  "flex",
                  "items-center",
                  "justify-center"
                )}
              >
                {item}
              </span>
            ) : (
              <Button
                className={clsx("w-full", "h-full")}
                onClick={onPagination(item)}
                variant="transparent"
              >
                {item}
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Button onClick={onNext(currentIndex)} variant="transparent">
        Next
      </Button>
    </div>
  );
};
