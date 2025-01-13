import { MainProps, ObjectExpand } from '../type';
import { default as McTab } from './index.vue';
export type McTabTabItem = ObjectExpand<{
    id: string;
    label: string;
    imagePath: string;
    jumpPath: string;
}>;
export interface McTabProps extends MainProps {
    tabList: Array<McTabTabItem>;
    attrs: any;
}
export type McTabInstance = InstanceType<typeof McTab>;
