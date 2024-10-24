import { withInstall } from "../utils";
import _customComponent from "./index.vue";

export const customComponent = withInstall(_customComponent);
export default customComponent;

export * from "./index.vue";
export * from "./type";
