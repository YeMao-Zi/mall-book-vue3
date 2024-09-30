import { CSSProperties } from "vue";

export const getMainStyle = (props: Record<string, any>): CSSProperties => {
  const style: Record<string, any> = {};
  Object.keys(props).forEach((k) => {
    const value = props[k];
    if (!isNumber(value)) {
      if (!value) {
        style[k] = "initial";
      } else {
        style[k] = value;
      }
    } else {
      style[k] = `${value}px`;
    }
  });
  return style;
};

export const isNumber = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
