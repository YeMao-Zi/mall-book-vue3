import type { InjectionKey, Ref } from "vue";
import type { EventClick } from "@mobilecustom/components";

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

export interface ConfirmReturn {
  page: ComponentOptions;
  widgets: ComponentOptions[];
}

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

export const PageInject = Symbol() as InjectionKey<{
  pageConfirm: (value: ConfirmReturn) => void;
  onEventClick: EventClick;
}>;
