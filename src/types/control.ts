import type { InjectionKey, Ref } from "vue";

export type Schema = {
  name: string;
  icon: string;
  children?: [];
  fields: Fields;
};

export type Field = {
  label: string;
  type: string;
  value: any;
  child?: Fields;
  data?: Array<{ id: string; label: string; value: any }>;
};
export type Fields = Record<string, Field>;

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
