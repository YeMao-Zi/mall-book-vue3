import { reactive } from "vue";
import componetJson from "./component.json";
import type { ComponentOptions, Field } from "../../types/platform";
import { initDefaulValue } from "@mobilecustom/components";

export const page = reactive<ComponentOptions>({
  id: "pageconfig",
  ...initDefaulValue(componetJson as any),
});

export const pageShemaField = reactive<Field>(componetJson.fields as any);
