import { reactive } from "vue";
import componetJson from "./component.json";
import type { ComponentOptions, Field } from "@/types/control";
import { initDefaulValue } from "@/custom-components/config";

export const pageCmp = reactive<ComponentOptions>({
  id: "pageconfig",
  ...initDefaulValue(componetJson as any),
});

export const pageShemaField = reactive<Field>(componetJson.fields as any);
