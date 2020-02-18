export const shapeStyle = {
    padding: 5,
    margin: 10,
    fontSize: 12,
    fontColor: "#212529",
    fontBackground: "#f8f9fa",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    shapeBackground: "hsla(210, 16%, 93%, 0.2)",
    shapeStrokeStyle: "ff0000",
    shapeShadowStyle: "hsla(210, 9%, 31%, 0.35)"
};
export class RectShape {
    constructor(data, onChange) {
        this.onDragStart = (positionX, positionY) => {
            const { x, y } = this.annotationData.mark;
            this.dragStartOffset = {
                offsetX: positionX - x,
                offsetY: positionY - y
            };
        };
        this.onDrag = (positionX, positionY) => {
            this.annotationData.mark.x = positionX - this.dragStartOffset.offsetX;
            this.annotationData.mark.y = positionY - this.dragStartOffset.offsetY;
            this.onChangeCallBack();
        };
        this.checkBoundary = (positionX, positionY) => {
            const { mark: { x, y, width, height } } = this.annotationData;
            if (((positionX > x && positionX < x + width) ||
                (positionX < x && positionX > x + width)) &&
                ((positionY > y && positionY < y + height) ||
                    (positionY < y && positionY > y + height))) {
                return true;
            }
            return false;
        };
        this.paint = (canvas2D, calculateTruePosition, selected) => {
            const { mark } = this.annotationData;
            const { x, y, width, height } = calculateTruePosition(mark);
            canvas2D.save();
            canvas2D.shadowBlur = 10;
            canvas2D.shadowColor = mark.shadowColor || shapeStyle.shapeShadowStyle;
            canvas2D.strokeStyle = mark.strokeColor || shapeStyle.shapeStrokeStyle;
            canvas2D.lineWidth = 2;
            canvas2D.strokeRect(x, y, width, height);
            canvas2D.restore();
            if (selected) {
                canvas2D.fillStyle = mark.backgroundColor || shapeStyle.shapeBackground;
                canvas2D.fillRect(x, y, width, height);
            }
            else {
                const { comment } = this.annotationData;
                if (comment) {
                    canvas2D.font = `${shapeStyle.fontSize}px ${shapeStyle.fontFamily}`;
                    const metrics = canvas2D.measureText(comment);
                    canvas2D.save();
                    canvas2D.fillStyle = shapeStyle.fontBackground;
                    canvas2D.fillRect(x, y, metrics.width + shapeStyle.padding * 2, shapeStyle.fontSize + shapeStyle.padding * 2);
                    canvas2D.textBaseline = "top";
                    canvas2D.fillStyle = shapeStyle.fontColor;
                    canvas2D.fillText(comment, x + shapeStyle.padding, y + shapeStyle.padding);
                }
            }
            canvas2D.restore();
            return { x, y, width, height };
        };
        this.adjustMark = ({ x = this.annotationData.mark.x, y = this.annotationData.mark.y, width = this.annotationData.mark.width, height = this.annotationData.mark.height }) => {
            this.annotationData.mark.x = x;
            this.annotationData.mark.y = y;
            this.annotationData.mark.width = width;
            this.annotationData.mark.height = height;
            this.onChangeCallBack();
        };
        this.getAnnotationData = () => {
            return this.annotationData;
        };
        this.setComment = (comment) => {
            this.annotationData.comment = comment;
        };
        this.equal = (data) => {
            return (data.id === this.annotationData.id &&
                data.comment === this.annotationData.comment &&
                data.mark.x === this.annotationData.mark.x &&
                data.mark.y === this.annotationData.mark.y &&
                data.mark.width === this.annotationData.mark.width &&
                data.mark.height === this.annotationData.mark.height);
        };
        this.annotationData = data;
        this.onChangeCallBack = onChange;
    }
}
//# sourceMappingURL=Shape.js.map