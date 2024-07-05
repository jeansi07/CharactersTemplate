import { LayoutProps } from "./Layout.types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLayout = (props: LayoutProps) => {
  const { children } = props;

  // Define las rutas permitidas

  return { children };
};
