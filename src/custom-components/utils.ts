import { CSSProperties } from "vue";

export const getBorderStyle = (props: Record<string, any>) => {
  const { borderWidth, borderColor, borderRadius } = props;
  return {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
  };
};

export const getMarginStyle = (props: Record<string, any>) => {
  const { marginTop, marginRight, marginLeft, marginBottom } = props;
  return {
    margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
  };
};

export const getPaddingStyle = (props: Record<string, any>) => {
  const { paddingTop, paddingRight, paddingBottom, paddingLeft } = props;
  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
  };
};

export const getMainStyle = (
  props: Record<string, any>,
): CSSProperties => {
  const { backgroundColor } = props;
  return {
    ...getPaddingStyle(props),
    ...getBorderStyle(props),
    ...getMarginStyle(props),
    backgroundColor: backgroundColor,
  };
};

export const isNumber = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
