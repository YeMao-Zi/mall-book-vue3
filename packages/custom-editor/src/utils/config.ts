import { type App } from "vue";
import { globalComponents as customComponents } from "@/custom-components/config";
import { globalComponents as customSchemaTemplate } from "@/custom-schema-template/config";

export function globalComponents(app: App<Element>) {
  customComponents(app);
  customSchemaTemplate(app);
}
