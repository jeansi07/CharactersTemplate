import clsx from "clsx";
import { PaginationBar } from "../PaginationBar";
import { PaginationViewProps } from "./PaginationView.type";
import { usePaginationView } from "./usePaginationView";

export const PaginationView = <T,>(props: PaginationViewProps<T>) => {
  const {
    onPressNext,
    onPressPage,
    onPressPrevious,
    size,
    initialIndex,
    className,
    renderPagination,
    onChangePage,
  } = usePaginationView(props);

  return (
    <div
      className={clsx(
        "w-full",
        "flex",
        "flex-1",
        "flex-col",
        "gap-y-2",
        className
      )}
    >
      <div className={clsx("flex", "flex-1", "overflow-auto", "max-w-full")}>
        {renderPagination}
      </div>
      <PaginationBar
        initialIndex={initialIndex}
        onPressNext={onPressNext ?? onChangePage}
        onPressPage={onPressPage ?? onChangePage}
        onPressPrevious={onPressPrevious ?? onChangePage}
        size={size}
      />
    </div>
  );
};
