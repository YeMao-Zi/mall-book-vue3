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

export type ObjectExpand<T> = T & {
  [k: string]: any;
};

import type { InjectionKey, Ref } from "vue";

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

export const ControlInject = Symbol() as InjectionKey<{
  initial: Initial;
  widgets: Ref<ComponentOptions[]>;
  curComponent: Ref<ComponentOptions | undefined>;
  setCurComponent: SetCurComponent;
  deleteComponent: DeleteComponent;
}>;

export type onClick = (options: { item: any; type: string }) => void;
