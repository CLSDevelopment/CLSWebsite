import * as theme from "./theme";

export const MegatronSection = ({ props }) => {
  if (!props.type || !theme[props.type]) {
    return null;
  }
  const Temp = theme[props.type];

  return <Temp {...props} />;
};
