import { IShape, IShapeBase } from "Shape";
export interface ITransformer {
    id: string;
    checkBoundary: (positionX: number, positionY: number) => boolean;
    startTransformation: (positionX: number, positionY: number) => void;
    onTransformation: (positionX: number, positionY: number) => void;
    paint: (canvas2D: CanvasRenderingContext2D, calculateTruePosition: (shapeData: IShapeBase) => IShapeBase) => void;
}
export default class Transformer implements ITransformer {
    id: string;
    private shape;
    private editable;
    private currentNodeCenterIndex;
    constructor(shape: IShape, editable: boolean);
    checkBoundary: (positionX: number, positionY: number) => boolean;
    startTransformation: (positionX: number, positionY: number) => void;
    onTransformation: (positionX: number, positionY: number) => void;
    paint: (canvas2D: CanvasRenderingContext2D, calculateTruePosition: (shapeData: IShapeBase) => IShapeBase) => void;
    private getCenterIndexByCursor;
    private checkEachRectBoundary;
    private getAllCentersTable;
}
