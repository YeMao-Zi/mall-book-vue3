import type { ComponentOptions, EventClick } from "../type";
import Preview from "./index.vue";
export interface PreviewProps {
  widgets: ComponentOptions[];
  onClick?: EventClick;
}

export type PreviewInstance = InstanceType<typeof Preview>;
