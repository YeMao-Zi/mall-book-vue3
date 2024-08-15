import { CSSProperties } from "vue";

export const getMainStyleByProps = (
  props: Record<string, any>,
): CSSProperties => {
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundColor,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    borderWidth,
    borderColor,
    borderRadius,
  } = props;
  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
    margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
    backgroundColor: backgroundColor,
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
  };
};

export const isNumber = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
