import { createApp } from "vue";
import App from "./App.vue";
import "@mobilecustom/components/lib/style.css";
import install from "@mobilecustom/components";

// import "tailwindcss/tailwind.css";

// import CustomEditor from "../../custom-editor/src/index";
// import '../../custom-editor/src/style/index.css'

import "@mobilecustom/editor/lib/editor.css"
import CustomEditor from "@mobilecustom/editor";


// import install from "../../custom-components/src/index";

createApp(App).use(CustomEditor).mount("#app");
// createApp(App).use(install).mount("#app");
