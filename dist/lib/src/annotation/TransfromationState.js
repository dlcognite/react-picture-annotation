import { DefaultAnnotationState } from "./DefaultAnnotationState";
export default class TransformationState {
    constructor(context) {
        this.onMouseDown = () => undefined;
        this.onMouseMove = (positionX, positionY) => {
            const { currentTransformer } = this.context;
            if (currentTransformer) {
                currentTransformer.onTransformation(positionX, positionY);
            }
        };
        this.onMouseUp = () => {
            const { shapes, setAnnotationState, selectedId, props: { onAnnotationUpdate } } = this.context;
            setAnnotationState(new DefaultAnnotationState(this.context));
            if (onAnnotationUpdate) {
                const currentShape = shapes.find(el => el.getAnnotationData().id === selectedId);
                if (currentShape) {
                    onAnnotationUpdate(currentShape.getAnnotationData());
                }
            }
        };
        this.onMouseLeave = () => this.onMouseUp();
        this.context = context;
    }
}
//# sourceMappingURL=TransfromationState.js.map