import { RectShape } from "../Shape";
import Transformer from "../Transformer";
import randomId from "../utils/randomId";
import CreatingAnnotationState from "./CreatingAnnotationState";
import DraggingAnnotationState from "./DraggingAnnotationState";
import TransformationState from "./TransfromationState";
export class DefaultAnnotationState {
    constructor(context) {
        this.onMouseMove = () => undefined;
        this.onMouseUp = () => {
            this.context.selectedId = null;
            this.context.onShapeChange();
        };
        this.onMouseLeave = () => undefined;
        this.onMouseDown = (positionX, positionY) => {
            const { shapes, currentTransformer, onShapeChange, setAnnotationState: setState, props: { editable } } = this.context;
            if (currentTransformer &&
                currentTransformer.checkBoundary(positionX, positionY)) {
                currentTransformer.startTransformation(positionX, positionY);
                setState(new TransformationState(this.context));
                return;
            }
            for (let i = shapes.length - 1; i >= 0; i--) {
                if (shapes[i].checkBoundary(positionX, positionY)) {
                    this.context.selectedId = shapes[i].getAnnotationData().id;
                    this.context.currentTransformer = new Transformer(shapes[i], editable);
                    const [selectedShape] = shapes.splice(i, 1);
                    shapes.push(selectedShape);
                    selectedShape.onDragStart(positionX, positionY);
                    onShapeChange();
                    setState(new DraggingAnnotationState(this.context));
                    return;
                }
            }
            if (editable) {
                const newShapeId = randomId();
                this.context.shapes.push(new RectShape({
                    id: newShapeId,
                    mark: {
                        x: positionX,
                        y: positionY,
                        width: 0,
                        height: 0,
                        type: "RECT"
                    }
                }, onShapeChange));
                this.context.pendingShapeId = newShapeId;
                setState(new CreatingAnnotationState(this.context));
            }
        };
        this.context = context;
    }
}
//# sourceMappingURL=DefaultAnnotationState.js.map