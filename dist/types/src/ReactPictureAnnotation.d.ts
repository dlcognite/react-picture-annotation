import React from "react";
import { IAnnotation } from "./Annotation";
import { IAnnotationState } from "./annotation/AnnotationState";
import { IShape, IShapeBase } from "./Shape";
import { ITransformer } from "./Transformer";
interface IReactPictureAnnotationProps {
    annotationData?: IAnnotation[];
    selectedId?: string | null;
    onChange?: (annotationData: IAnnotation[]) => void;
    onSelect: (id: string | null) => void;
    width: number;
    height: number;
    image: string;
    editable: boolean;
    drawLabel: boolean;
    renderItemPreview: (editable: boolean, annotation: IAnnotation, onChange: (value: string) => void, onDelete: () => void) => React.ReactElement;
    onAnnotationUpdate?: (annotation: IAnnotation) => void;
    onAnnotationCreate?: (annotation: IAnnotation) => void;
    onAnnotationDelete?: (annotation: IAnnotation) => void;
}
export default class ReactPictureAnnotation extends React.Component<IReactPictureAnnotationProps> {
    selectedId: string | null;
    readonly selectedItem: IAnnotation<import("./Shape").IShapeData> | undefined;
    static defaultProps: {
        renderItemPreview: (editable: boolean, annotation: IAnnotation<import("./Shape").IShapeData>, onChange: (value: string) => void, onDelete: () => void) => JSX.Element;
        editable: boolean;
        drawLabel: boolean;
    };
    shapes: IShape[];
    currentTransformer: ITransformer;
    pendingShapeId: string | null;
    state: {
        inputPosition: {
            left: number;
            top: number;
        };
        showInput: boolean;
    };
    private currentAnnotationData;
    private selectedIdTrueValue;
    private canvasRef;
    private canvas2D?;
    private imageCanvasRef;
    private imageCanvas2D?;
    private currentImageElement?;
    private currentAnnotationState;
    private scaleState;
    private startDrag?;
    private lastPinchLength?;
    componentDidMount: () => void;
    componentDidUpdate: (preProps: IReactPictureAnnotationProps) => void;
    calculateMousePosition: (positionX: number, positionY: number) => {
        positionX: number;
        positionY: number;
    };
    calculateShapePosition: (shapeData: IShapeBase) => IShapeBase;
    render(): JSX.Element;
    setAnnotationState: (annotationState: IAnnotationState) => void;
    onShapeChange: () => void;
    onDelete: (id?: string | null) => void;
    private syncAnnotationData;
    private syncSelectedId;
    private setCanvasDPI;
    private onInputCommentChange;
    private cleanImage;
    private onImageChange;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private onTouchStart;
    private onTouchMove;
    private onTouchEnd;
    private handlePinchChange;
    private onMouseLeave;
    private onWheel;
}
export declare const getPinchMidpoint: (touches: React.TouchList) => {
    x: number;
    y: number;
};
export declare const getPinchLength: (touches: React.TouchList) => number;
export declare const tryCancelEvent: (event: React.TouchEvent<Element>) => boolean;
export {};
