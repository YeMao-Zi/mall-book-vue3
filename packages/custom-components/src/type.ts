export interface MainProps {
  styles?: Record<string, any>;
  children?: any;
  attrs?: Record<string, any>;
}

export type ObjectExpand<T> = T & {
  [k: string]: any;
};

export type Schema = {
  name: string;
  icon: string;
  children?: [];
  fields: Fields;
  [x: string]: any;
};

export type Field = {
  label: string;
  type: string;
  value?: any;
  child?: Fields;
  data?: Array<{ id: string; label: string; value: any }>;
};

export type Fields = {
  // styles?: Record<string, Field>;
  [x: string]: Field;
};

export type InitializingItem = Omit<Schema, "fields"> & {
  component: string;
  [x: string]: any;
};

export type SetCurComponent = (cmp: ComponentOptions) => void;

export type DeleteComponent = (id: string, list?: ComponentOptions[]) => void;

export type ComponentOptions = InitializingItem & {
  id: string;
};

export interface Initial {
  fields: Fields;
  initializing: InitializingItem[];
}

export type EventClick = (options: { item: any; type: string }) => void;
