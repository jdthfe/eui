export interface TransitionWrapProps {
    /** 是否展示 */
    visible?: boolean;
    /** active 动画持续时长 */
    time?: number;
    /** 动画的属性名 */
    transitionClassName?: string;
    /** visible 为 false 时节点也不删除 */
    keepOnExit?: boolean;
    /** 动画完成时的回调函数 */
    onExitDone?: () => void;
}

export interface TransitionWrapPropsWithChildren extends TransitionWrapProps {
    /** 子组件，可以包含多个 */
    children: React.ReactElement | React.ReactElement[];
}

export type TransitionStatus = 'entry' | 'entry-active' | 'entry-done' | 'exit' | 'exit-active' | 'exit-done';
