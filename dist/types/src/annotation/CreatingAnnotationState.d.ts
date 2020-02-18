import { ReactPictureAnnotation } from "index";
import { IAnnotationState } from "./AnnotationState";
export default class CreatingAnnotationState implements IAnnotationState {
    private context;
    constructor(context: ReactPictureAnnotation);
    onMouseDown: () => undefined;
    onMouseMove: (positionX: number, positionY: number) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
}
