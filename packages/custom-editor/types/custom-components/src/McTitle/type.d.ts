import { MainProps, ObjectExpand } from '../type';
import { default as McTitle } from './index.vue';
export interface McTitleProps extends MainProps {
    value: ObjectExpand<{
        title: string;
        info?: string;
    }>;
}
export type McTitleInstance = InstanceType<typeof McTitle>;
