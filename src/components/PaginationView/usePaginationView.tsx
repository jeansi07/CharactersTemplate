import clsx from "clsx";
import { useMemo } from "react";
import { Backbone } from "../Backbone";
import { PaginationViewProps } from "./PaginationView.type";

export const usePaginationView = <T,>(props: PaginationViewProps<T>) => {
  const {
    onPressNext,
    onPressPage,
    onPressPrevious,
    size,
    renderComponent,
    data = [],
    initialIndex,
    emptyState,
    className,
    classNameContainer,
    loadingState,
    onChangePage,
    isLoading,
  } = props;

  const renderData = useMemo(
    () => data.slice(0, 9).map((item, index) => renderComponent?.(item, index)),
    [data, renderComponent]
  );

  const renderPagination = useMemo(() => {
    switch (true) {
      case isLoading:
        return (
          <div
            className={clsx(
              "flex",
              "h-full",
              "w-full",
              "justify-center",
              "items-center"
            )}
          >
            {loadingState ?? (
              <Backbone width="90%" height="90%" borderRadius="20px" />
            )}
          </div>
        );
      case data.length <= 0:
        return (
          <div className={clsx("flex", "h-full", "w-full")}>
            {emptyState ?? (
              <Backbone width="90%" height="90%" borderRadius="20px" />
            )}
          </div>
        );

      default:
        return (
          <div
            // style={{
            //   gridTemplateColumns: `repeat(auto-fill, minmax(max(350px, 98%/${cols}), 1fr))`,
            //   gridTemplateRows: `repeat(auto-fill, minmax(max(180px, 96%/${rows}), 1fr))`,
            // }}
            className={clsx(
              "flex-1",
              "grid",
              "md:grid-cols-2",
              "lg:grid-cols-3",
              "grid-cols-1",
              "grid-rows-3",
              classNameContainer
            )}
          >
            {renderData}
          </div>
        );
    }
  }, [
    isLoading,
    loadingState,
    emptyState,
    renderData,
    data,
    classNameContainer,
  ]);

  return {
    onPressNext,
    onPressPage,
    renderPagination,
    onPressPrevious,
    initialIndex,
    size,
    onChangePage,
    className,
  };
};
