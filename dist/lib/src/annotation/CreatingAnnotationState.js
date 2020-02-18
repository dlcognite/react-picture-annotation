import { DefaultAnnotationState } from "./DefaultAnnotationState";
export default class CreatingAnnotationState {
    constructor(context) {
        this.onMouseDown = () => undefined;
        this.onMouseMove = (positionX, positionY) => {
            const { shapes, onShapeChange } = this.context;
            if (shapes.length > 0) {
                const currentShape = shapes.find(el => el.getAnnotationData().id === this.context.pendingShapeId);
                if (currentShape) {
                    const { mark: { x, y } } = currentShape.getAnnotationData();
                    currentShape.adjustMark({
                        width: positionX - x,
                        height: positionY - y
                    });
                }
            }
            onShapeChange();
        };
        this.onMouseUp = () => {
            const { shapes, onShapeChange, setAnnotationState, onDelete, props: { onAnnotationCreate } } = this.context;
            const data = shapes.find(el => el.getAnnotationData().id === this.context.pendingShapeId);
            if (data) {
                if (data &&
                    data.getAnnotationData().mark.width !== 0 &&
                    data.getAnnotationData().mark.height !== 0) {
                    this.context.selectedId = data.getAnnotationData().id;
                    if (onAnnotationCreate) {
                        onAnnotationCreate(data.getAnnotationData());
                    }
                }
                else {
                    onDelete(this.context.pendingShapeId);
                    this.context.selectedId = null;
                }
            }
            else {
                this.context.pendingShapeId = null;
                this.context.selectedId = null;
            }
            setAnnotationState(new DefaultAnnotationState(this.context));
            onShapeChange();
        };
        this.onMouseLeave = () => this.onMouseUp();
        this.context = context;
    }
}
//# sourceMappingURL=CreatingAnnotationState.js.map