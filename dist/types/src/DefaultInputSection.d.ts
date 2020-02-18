/// <reference types="react" />
import { IAnnotation } from "./Annotation";
export interface IDefaultInputSection {
    editable: boolean;
    annotation: IAnnotation;
    onChange: (value: string) => void;
    onDelete: () => void;
}
declare const _default: ({ editable, annotation, onChange, onDelete }: IDefaultInputSection) => JSX.Element;
export default _default;
