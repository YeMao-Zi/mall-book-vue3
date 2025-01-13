import { App } from 'vue';
import { Fields, InitializingItem, Schema } from './type';
export declare function useSchema(): {
    fields: Fields;
    initializing: {
        [x: string]: any;
        [x: number]: any;
        component: string;
    }[];
};
export declare function initDefaulValue(config: Schema & {
    component: string;
}): {
    component: string;
    name: string;
    icon: string;
    children: [] | undefined;
};
export declare function setDefaultValue(fields: Fields, initializing: InitializingItem): InitializingItem;
export declare function initCustomComponents(app: App<Element>): void;
export declare const useOperabilityCall: <T extends (...args: any[]) => void>(fn: T, ...args: Parameters<T>) => void;
