import { type MainProps, ObjectExpand } from "../type";
import McNotice from "./index.vue";
export interface McNoticeProps extends MainProps {
  imageValue: ObjectExpand<{
    text: string;
    icon: string;
  }>;
  attrs: ObjectExpand<{
    speed: number;
    scrollable: boolean;
  }>;
}

export type NoticeBarProps = ObjectExpand<{
  speed?: number;
  scrollable?: boolean;
}>;

export type McNoticeInstance = InstanceType<typeof McNotice>;
