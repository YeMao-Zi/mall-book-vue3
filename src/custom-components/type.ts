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

export interface MainProps {
  styles?: Record<string, any>;
  children?: any;
  attrs?: Record<string, any>;
}
