import clsx from "clsx";
import Svg from "react-inlinesvg";
import styles from "./Icon.module.css";
import { IconProps } from "./Icon.types";

export const Icon = (props: IconProps): JSX.Element => {
  const { src, className, fillCircle, fillLine, fillPath, fillRect, pointer } =
    props;
  return (
    <Svg
      src={src}
      className={clsx(
        "max-w-full max-h-full p-0 m-0",
        className,
        { "cursor-pointer": pointer },
        [fillPath && styles.svgFillPath],
        [fillCircle && styles.svgFillCircle],
        [fillLine && styles.svgFillLine],
        [fillRect && styles.svgFillRectfillRect]
      )}
    />
  );
};
