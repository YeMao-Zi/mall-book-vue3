import { MainStyles } from "./type";
export const getMainStyleByProps = (props: MainStyles) => {
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
    borderRadius,
  };
};
