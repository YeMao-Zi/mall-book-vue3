import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { EventClick } from '@mobilecustom/components';
import { PublicProps } from 'vue';

export declare const CustomEditor: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
}, string, PublicProps, Readonly<Props> & Readonly<{
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const CustomEditor_2: (app: App<Element>) => void;
export default CustomEditor_2;

declare interface Props {
    onEventClick: EventClick;
}

export { }
