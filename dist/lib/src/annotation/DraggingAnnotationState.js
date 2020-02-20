import { DefaultAnnotationState } from "./DefaultAnnotationState";
export default class DraggingAnnotationState {
    constructor(context) {
        this.onMouseDown = () => undefined;
        this.onMouseMove = (positionX, positionY) => {
            const { shapes, selectedId } = this.context;
            const currentShape = shapes.find(el => el.getAnnotationData().id === selectedId);
            this.hasMoved = true;
            currentShape.onDrag(positionX, positionY);
        };
        this.onMouseUp = () => {
            const { shapes, setAnnotationState, selectedId, props: { onAnnotationUpdate } } = this.context;
            setAnnotationState(new DefaultAnnotationState(this.context));
            if (onAnnotationUpdate && this.hasMoved) {
                const currentShape = shapes.find(el => el.getAnnotationData().id === selectedId);
                onAnnotationUpdate(currentShape.getAnnotationData());
            }
        };
        this.onMouseLeave = () => this.onMouseUp();
        this.context = context;
        this.hasMoved = false;
    }
}
//# sourceMappingURL=DraggingAnnotationState.js.map