import { ref } from "vue";
import type {
  SetCurComponent,
  DeleteComponent,
  ComponentOptions,
  InitializingItem,
} from "@/types/control";

export const widgets = ref<ComponentOptions[]>([]);
