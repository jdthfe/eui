export interface TransitionWrapProps {
    /** Show the component; triggers the enter or exit states */
    visible?: boolean;
    /** The duration of the transition, in milliseconds */
    time?: number;
    /** The animation classNames applied to the component as it enters, exits or has finished the transition */
    transitionClassName?: string;
    /** By default the child component unmount after it reaches the '[transitionClassName]-exit-done' state. Set keepOnExit if you'd prefer to retain the component after it finishes exiting. */
    keepOnExit?: boolean;
    /** Callback fired after the ‘[transitionClassName]-exit-done’ status is applied.  */
    onExitDone?: () => void;
    /** Callback fired after the ‘[transitionClassName]-entry-done’ status is applied.  */
    onEntryDone?: () => void;
}

export interface TransitionWrapPropsWithChildren extends TransitionWrapProps {
    /** children */
    children: React.ReactElement | React.ReactElement[];
}

export type TransitionStatus = 'entry' | 'entry-active' | 'entry-done' | 'exit' | 'exit-active' | 'exit-done';
