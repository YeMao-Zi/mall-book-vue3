import type { InjectionKey } from "vue";

export type Fields = any;

export type InitializingItem = any;

export type SetCurComponent = (cmp: any) => void;

export type DeleteComponent = (id: string, list?: any[]) => void;

export type WidgetsItem = InitializingItem & {
  id: string;
};

export interface Initial {
  fields: Fields;
  initializing: InitializingItem[];
}

export const ControlInject = Symbol() as InjectionKey<{
  initial: Initial;
  widgets: WidgetsItem[];
  curComponent: InitializingItem;
  setCurComponent: SetCurComponent;
  deleteComponent: DeleteComponent;
}>;
