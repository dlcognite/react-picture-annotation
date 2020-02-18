import { IAnnotation } from "./Annotation";
export declare const shapeStyle: {
    padding: number;
    margin: number;
    fontSize: number;
    fontColor: string;
    fontBackground: string;
    fontFamily: string;
    shapeBackground: string;
    shapeStrokeStyle: string;
    shapeShadowStyle: string;
};
export interface IShapeBase {
    x: number;
    y: number;
    width: number;
    height: number;
    shadowColor?: string;
    backgroundColor?: string;
    strokeColor?: string;
}
export interface IShapeAdjustBase extends Partial<IShapeBase> {
}
export interface IShapeData extends IShapeBase {
    type: string;
}
export interface IRectShapeData extends IShapeData {
    type: "RECT";
}
export interface IShape {
    onDragStart: (positionX: number, positionY: number) => void;
    onDrag: (positionX: number, positionY: number) => void;
    checkBoundary: (positionX: number, positionY: number) => boolean;
    paint: (canvas2D: CanvasRenderingContext2D, calculateTruePosition: (shapeData: IShapeBase) => IShapeBase, selected: boolean, drawLabel: boolean) => IShapeBase;
    getAnnotationData: () => IAnnotation;
    adjustMark: (adjustBase: IShapeAdjustBase) => void;
    setComment: (comment: string) => void;
    equal: (data: IAnnotation) => boolean;
}
export declare class RectShape implements IShape {
    private annotationData;
    private onChangeCallBack;
    private dragStartOffset;
    constructor(data: IAnnotation<IShapeData>, onChange: () => void);
    onDragStart: (positionX: number, positionY: number) => void;
    onDrag: (positionX: number, positionY: number) => void;
    checkBoundary: (positionX: number, positionY: number) => boolean;
    paint: (canvas2D: CanvasRenderingContext2D, calculateTruePosition: (shapeData: IShapeBase) => IShapeBase, selected: boolean, drawLabel: boolean) => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    adjustMark: ({ x, y, width, height }: {
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }) => void;
    getAnnotationData: () => IAnnotation<IShapeData>;
    setComment: (comment: string) => void;
    equal: (data: IAnnotation<IShapeData>) => boolean;
}
