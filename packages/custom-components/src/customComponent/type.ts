import type { ComponentOptions, EventClick } from "../type";
import customComponent from "./index.vue";
export interface CustomComponentProps {
  widgets: ComponentOptions[];
  page: { styles?: Record<string, any>; [k: string]: any };
  onClick?: EventClick;
}

export type customComponentInstance = InstanceType<typeof customComponent>;
