import { default as McCube } from './index.vue';
import { MainProps, ObjectExpand } from '../type';
export type McCubeListItem = ObjectExpand<{
    top: number;
    left: number;
    width: number;
    height: number;
    startKey: number;
    endKey: number;
    imagePath?: string;
    jumpPath?: string;
    styles: Record<string, any>;
}>;
export interface McCubeProps extends MainProps {
    cube: {
        row: number;
        column: number;
        list: Array<McCubeListItem>;
    };
}
/**
 * 定义instance类型
 */
export type McCubeInstance = InstanceType<typeof McCube>;
