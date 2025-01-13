import { makeInstaller as o } from "./utils.js";
import e from "./installs.js";
import { customComponent as f } from "./customComponent/index.js";
import { McBlock as i } from "./McBlock/index.js";
import { McCarousel as x } from "./McCarousel/index.js";
import { McContainer as s } from "./McContainer/index.js";
import { McCube as M } from "./McCube/index.js";
import { McImage as b } from "./McImage/index.js";
import { McNotice as k } from "./McNotice/index.js";
import { McTab as I } from "./McTab/index.js";
import { McTitle as V } from "./McTitle/index.js";
import { Preview as h } from "./Preview/index.js";
import { initCustomComponents as w, initDefaulValue as y, setDefaultValue as B, useOperabilityCall as N, useSchema as O } from "./config.js";
const m = o([...e]);
export {
  i as McBlock,
  x as McCarousel,
  s as McContainer,
  M as McCube,
  b as McImage,
  k as McNotice,
  I as McTab,
  V as McTitle,
  h as Preview,
  f as customComponent,
  m as default,
  w as initCustomComponents,
  y as initDefaulValue,
  B as setDefaultValue,
  N as useOperabilityCall,
  O as useSchema
};
