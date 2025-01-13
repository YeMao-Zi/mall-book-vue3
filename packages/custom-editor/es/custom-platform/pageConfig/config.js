import { reactive as o } from "vue";
import i from "./component.json.js";
import "../../packages/custom-components/es/McBlock/index.js";
import "../../packages/custom-components/es/McCarousel/index.js";
import "../../packages/custom-components/es/McContainer/index.js";
import "../../packages/custom-components/es/McCube/index.js";
import "../../packages/custom-components/es/McTab/index.js";
import "../../packages/custom-components/es/McImage/index.js";
import "../../packages/custom-components/es/McNotice/index.js";
import "../../packages/custom-components/es/McTitle/index.js";
import "../../packages/custom-components/es/Preview/index.js";
import "../../packages/custom-components/es/customComponent/index.js";
import { initDefaulValue as t } from "../../packages/custom-components/es/config.js";
const x = o({
  id: "pageconfig",
  ...t(i)
}), h = o(i.fields);
export {
  x as page,
  h as pageShemaField
};
