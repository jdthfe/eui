import { TransitionWrapProps } from '../TransitionWrap/PropsType';
export interface CoverProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** transparent */
    transparent?: boolean;
}

export interface CoverWithTransitionWrap extends TransitionWrapProps, CoverProps {}
