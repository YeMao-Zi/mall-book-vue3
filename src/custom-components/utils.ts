import { CSSProperties } from "vue";

export const getBorderStyle = (props: Record<string, any>) => {
  const {
    borderWidth = 0,
    borderColor = "transparent",
    borderRadius = 0,
  } = props;
  return {
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
  };
};

export const getMarginStyle = (props: Record<string, any>) => {
  const {
    marginTop = 0,
    marginRight = 0,
    marginLeft = 0,
    marginBottom = 0,
  } = props;
  return {
    margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
  };
};

export const getPaddingStyle = (props: Record<string, any>) => {
  const {
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  } = props;
  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
  };
};

export const getMainStyle = (props: Record<string, any>): CSSProperties => {
  const { backgroundColor = "transparent" } = props;
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
