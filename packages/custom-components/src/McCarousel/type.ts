import McCarousel from "./index.vue";
import type { MainProps, ObjectExpand, EventClick } from "../type";

export type McCarouselListItem = ObjectExpand<{
  id: any;
  imagePath?: string;
  jumpPath?: string;
}>;
export interface McCarouselProps extends MainProps {
  list: Array<McCarouselListItem>;
  onClick?: EventClick;
}
/**
 * 定义instance类型
 */
export type McCarouselInstance = InstanceType<typeof McCarousel>;
