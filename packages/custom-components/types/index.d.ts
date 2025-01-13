import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<McContainerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McContainerProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare type ComponentOptions = InitializingItem & {
    id: string;
};

export declare const customComponent: SFCWithInstall<DefineComponent<CustomComponentProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< CustomComponentProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

export declare type customComponentInstance = InstanceType<typeof _default_2>;

export declare interface CustomComponentProps {
    widgets: ComponentOptions[];
    page: {
        styles?: Record<string, any>;
        [k: string]: any;
    };
    onEventClick?: EventClick;
}

declare const _default: (app: App) => void;
export default _default;

declare const _default_10: DefineComponent<McTitleProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McTitleProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const _default_11: DefineComponent<PreviewProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<PreviewProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const _default_2: DefineComponent<CustomComponentProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<CustomComponentProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const _default_3: DefineComponent<McBlockProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McBlockProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const _default_4: DefineComponent<McCarouselProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McCarouselProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const _default_5: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

declare const _default_6: DefineComponent<McCubeProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McCubeProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
    mcCube: HTMLDivElement;
}, HTMLDivElement>;

declare const _default_7: DefineComponent<McImageProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McImageProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLImageElement>;

declare const _default_8: DefineComponent<McNoticeProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McNoticeProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const _default_9: DefineComponent<McTabProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<McTabProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare type DeleteComponent = (id: string, list?: ComponentOptions[]) => void;

export declare type EventClick = (options: {
    item: any;
    type: string;
}) => void;

export declare type Field = {
    label: string;
    type: string;
    value?: any;
    child?: Fields;
    data?: Array<{
        id: string;
        label: string;
        value: any;
    }>;
};

export declare type Fields = {
    [x: string]: Field;
};

export declare function initCustomComponents(app: App<Element>): void;

export declare function initDefaulValue(config: Schema & {
    component: string;
}): {
    component: string;
    name: string;
    icon: string;
    children: [] | undefined;
};

export declare interface Initial {
    fields: Fields;
    initializing: InitializingItem[];
}

export declare type InitializingItem = Omit<Schema, "fields"> & {
    component: string;
    [x: string]: any;
};

export declare interface MainProps {
    styles?: Record<string, any>;
    children?: any;
    attrs?: Record<string, any>;
}

export declare const McBlock: SFCWithInstall<DefineComponent<McBlockProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McBlockProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

/**
 * 定义instance类型
 */
export declare type McBlockInstance = InstanceType<typeof _default_3>;

export declare interface McBlockProps extends MainProps {
}

export declare const McCarousel: SFCWithInstall<DefineComponent<McCarouselProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McCarouselProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

/**
 * 定义instance类型
 */
export declare type McCarouselInstance = InstanceType<typeof _default_4>;

export declare type McCarouselListItem = ObjectExpand<{
    id: any;
    imagePath?: string;
    jumpPath?: string;
}>;

export declare interface McCarouselProps extends MainProps {
    list: Array<McCarouselListItem>;
    onEventClick?: EventClick;
}

export declare const McContainer: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< McContainerProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< McContainerProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< McContainerProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;

/**
 * 定义instance类型
 */
export declare type McContainerInstance = InstanceType<typeof _default_5>;

export declare interface McContainerProps extends MainProps {
}

export declare const McCube: SFCWithInstall<DefineComponent<McCubeProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McCubeProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
    mcCube: HTMLDivElement;
}, HTMLDivElement>> & Record<string, any>;

/**
 * 定义instance类型
 */
export declare type McCubeInstance = InstanceType<typeof _default_6>;

export declare type McCubeListItem = ObjectExpand<{
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

export declare interface McCubeProps extends MainProps {
    cube: {
        row: number;
        column: number;
        list: Array<McCubeListItem>;
    };
}

export declare const McImage: SFCWithInstall<DefineComponent<McImageProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McImageProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLImageElement>> & Record<string, any>;

export declare type McImageInstance = InstanceType<typeof _default_7>;

export declare interface McImageProps extends MainProps {
    imageValue: ObjectExpand<{
        imagePath?: string;
        jumpPath?: string;
    }>;
}

export declare const McNotice: SFCWithInstall<DefineComponent<McNoticeProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McNoticeProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

export declare type McNoticeInstance = InstanceType<typeof _default_8>;

export declare interface McNoticeProps extends MainProps {
    imageValue: ObjectExpand<{
        text: string;
        icon: string;
    }>;
    attrs: ObjectExpand<{
        speed: number;
        scrollable: boolean;
    }>;
}

export declare const McTab: SFCWithInstall<DefineComponent<McTabProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McTabProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

export declare type McTabInstance = InstanceType<typeof _default_9>;

export declare interface McTabProps extends MainProps {
    tabList: Array<McTabTabItem>;
    attrs: any;
}

export declare type McTabTabItem = ObjectExpand<{
    id: string;
    label: string;
    imagePath: string;
    jumpPath: string;
}>;

export declare const McTitle: SFCWithInstall<DefineComponent<McTitleProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< McTitleProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;

export declare type McTitleInstance = InstanceType<typeof _default_10>;

export declare interface McTitleProps extends MainProps {
    value: ObjectExpand<{
        title: string;
        info?: string;
    }>;
}

export declare type NoticeBarProps = ObjectExpand<{
    speed?: number;
    scrollable?: boolean;
}>;

export declare type ObjectExpand<T> = T & {
    [k: string]: any;
};

export declare const Preview: SFCWithInstall<DefineComponent<PreviewProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< PreviewProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>> & Record<string, any>;

export declare type PreviewInstance = InstanceType<typeof _default_11>;

export declare interface PreviewProps {
    widgets: ComponentOptions[];
    onEventClick?: EventClick;
}

export declare type Schema = {
    name: string;
    icon: string;
    children?: [];
    fields: Fields;
    [x: string]: any;
};

export declare type SetCurComponent = (cmp: ComponentOptions) => void;

export declare function setDefaultValue(fields: Fields, initializing: InitializingItem): InitializingItem;

declare type SFCWithInstall<T> = T & Plugin_2;

export declare const useOperabilityCall: <T extends (...args: any[]) => void>(fn: T, ...args: Parameters<T>) => void;

export declare function useSchema(): {
    fields: Fields;
    initializing: {
        [x: string]: any;
        [x: number]: any;
        component: string;
    }[];
};

export { }
