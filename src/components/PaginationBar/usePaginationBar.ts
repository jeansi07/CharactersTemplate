import { times } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { PaginationBarsProps } from "./PaginationBar.type";

export const usePaginationBar = (props: PaginationBarsProps) => {
  const {
    size = 1,
    onPressNext,
    onPressPage,
    onPressPrevious,
    initialIndex = 1,
  } = props;
  const [currentSize, setCurrentSize] = useState(size);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const renderPages = useMemo(() => {
    const parseArrayIndex = (array: number[]) => {
      switch (true) {
        case array.length < 11:
          return array;
        case currentIndex <= 5:
          return [
            ...array.filter((item) => item <= 7),
            "...",
            ...array.slice(array.length - 2),
          ];
        case currentIndex > 5 && currentIndex < array.length - 4:
          return [
            ...array.slice(0, 2),
            "...",
            ...array.slice(currentIndex - 3, currentIndex + 2),
            "...",
            ...array.slice(array.length - 2),
          ];
        case currentIndex > array.length - 5:
          return [
            ...array.slice(0, 2),
            "...",
            ...array.slice(array.length - 6),
          ];
        default:
          return array;
      }
    };

    const array = times(currentSize, (n) => n + 1);
    const pagesArray = parseArrayIndex(array);
    return pagesArray;
  }, [currentSize, currentIndex]);

  const onNext = (index: number) => () => {
    const nextIndex = index + 1;
    if (nextIndex <= size) {
      setCurrentIndex(nextIndex);
      onPressNext?.(nextIndex);
    }
  };

  const onPrevious = (index: number) => () => {
    const previousIndex = index - 1;
    if (previousIndex >= 1) {
      setCurrentIndex(previousIndex);
      onPressPrevious?.(previousIndex);
    }
  };

  const onPagination = (index: number) => () => {
    onPressPage?.(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentSize(size);
    setCurrentIndex(initialIndex);
  }, [size, initialIndex]);

  return {
    currentSize,
    currentIndex,
    onNext,
    onPagination,
    onPrevious,
    renderPages,
  };
};
