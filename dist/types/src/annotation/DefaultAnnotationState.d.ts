import ReactPictureAnnotation from "../ReactPictureAnnotation";
import { IAnnotationState } from "./AnnotationState";
export declare class DefaultAnnotationState implements IAnnotationState {
    private context;
    constructor(context: ReactPictureAnnotation);
    onMouseMove: () => undefined;
    onMouseUp: () => void;
    onMouseLeave: () => undefined;
    onMouseDown: (positionX: number, positionY: number) => void;
}
