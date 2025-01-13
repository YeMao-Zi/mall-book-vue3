import { CSSProperties, App, Plugin } from 'vue';
export declare const getMainStyle: (props: Record<string, any>) => CSSProperties;
export declare const isNumber: (value: any) => boolean;
export type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
export declare const makeInstaller: (components?: Plugin[]) => (app: App) => void;
