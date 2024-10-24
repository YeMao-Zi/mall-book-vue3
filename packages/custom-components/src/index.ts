import { makeInstaller } from "./utils";
import installs from "./installs";

export * from "./components";
export * from "./config";
export * from "./type";
export default makeInstaller([...installs]);
