import McContainer from "./index.vue";
import { type MainProps } from "../type";
export interface McContainerProps extends MainProps{}
/**
 * 定义instance类型
 */
export type McContainerInstance = InstanceType<typeof McContainer>;
