import McBlock from "./index.vue";
import type { MainProps } from "../type";

export interface McBlockProps extends MainProps {}

/**
 * 定义instance类型
 */
export type McBlockInstance = InstanceType<typeof McBlock>;
