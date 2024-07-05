import { BackboneProps } from "./Backbone.type";

export const Backbone: React.FC<BackboneProps> = ({
  width = "80%",
  height = "1em",
  color = "#DDDBDD",
  borderRadius = "0",
}) => {
  return (
    <span
      className="skeleton-box block relative overflow-hidden"
      style={{
        width,
        height,
        backgroundColor: color,
        borderRadius,
      }}
    />
  );
};
