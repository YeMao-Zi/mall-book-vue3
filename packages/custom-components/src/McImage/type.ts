import type { MainProps, ObjectExpand } from "../type";
import McImage from "./index.vue";
export interface McImageProps extends MainProps {
  imageValue: ObjectExpand<{
    imagePath?: string;
    jumpPath?: string;
  }>;
}

export type McImageInstance = InstanceType<typeof McImage>;
