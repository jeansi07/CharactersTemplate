export interface PaginationBarsProps {
  size?: number;
  initialIndex?: number;
  onPressPrevious?: (index: number) => void;
  onPressNext?: (index: number) => void;
  onPressPage?: (index: number) => void;
}
