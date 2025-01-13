import { ComponentOptions, EventClick } from '../type';
import { default as customComponent } from './index.vue';
export interface CustomComponentProps {
    widgets: ComponentOptions[];
    page: ComponentOptions;
    onClick?: EventClick;
}
export type customComponentInstance = InstanceType<typeof customComponent>;
