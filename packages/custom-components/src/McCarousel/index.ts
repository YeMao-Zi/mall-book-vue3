import { withInstall } from "../utils";
import _McCarousel from "./index.vue";
import { register } from "swiper/element/bundle";
register();
export const McCarousel = withInstall(_McCarousel);
export default McCarousel;

export * from "./index.vue";
export * from "./type";
