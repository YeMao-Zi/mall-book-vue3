import { MainProps, ObjectExpand } from '../type';
import { default as McImage } from './index.vue';
export interface McImageProps extends MainProps {
    imageValue: ObjectExpand<{
        imagePath?: string;
        jumpPath?: string;
    }>;
}
export type McImageInstance = InstanceType<typeof McImage>;
