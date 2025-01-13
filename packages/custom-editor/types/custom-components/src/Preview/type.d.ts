import { ComponentOptions, EventClick } from '../type';
import { default as Preview } from './index.vue';
export interface PreviewProps {
    widgets: ComponentOptions[];
    onClick?: EventClick;
}
export type PreviewInstance = InstanceType<typeof Preview>;
