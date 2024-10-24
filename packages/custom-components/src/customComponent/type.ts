import type { ComponentOptions, EventClick } from "../type";
import customComponent from "./index.vue";
export interface CustomComponentProps {
  widgets: ComponentOptions[];
  page: ComponentOptions;
  onClick?: EventClick;
}

export type customComponentInstance = InstanceType<
  typeof customComponent
>;
