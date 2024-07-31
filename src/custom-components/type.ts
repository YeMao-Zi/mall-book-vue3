export interface BoxPadding {
  paddingTop: number;
  paddingRight: number;
  paddingLeft: number;
  paddingBottom: number;
}

export interface BoxMargin {
  marginTop: number;
  marginRight: number;
  marginLeft: number;
  marginBottom: number;
}

export interface BoxBorder {
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
}

export interface MainProps extends BoxPadding, BoxMargin, BoxBorder {
  children?: any;
  backgroundColor: string;
}
