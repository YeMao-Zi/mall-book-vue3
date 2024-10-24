import { CSSProperties } from "vue";
import type { App, Plugin } from "vue";

export const getMainStyle = (props: Record<string, any>): CSSProperties => {
  const style: Record<string, any> = {};
  Object.keys(props).forEach((k) => {
    const value = props[k];
    if (!isNumber(value)) {
      if (!value) {
        style[k] = "initial";
      } else {
        style[k] = value;
      }
    } else {
      style[k] = `${value}px`;
    }
  });
  return style;
};

export const isNumber = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as SFCWithInstall<T>).install = (app: App<Element>): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };
  return install;
};
