(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.named = {}, global.React));
}(this, function (exports, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/* .rus {\n  --theme-color: hsl(262, 24%, 84%);\n  --theme-background: hsl(262, 25%, 98%);\n\n  position: relative;\n  padding: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n  background-color: var(--theme-background);\n  border: 1px dashed var(--theme-color);\n  border-radius: 5px;\n  cursor: pointer;\n} */\n\n.rp-stage {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", Helvetica, Arial,\n    sans-serif;\n}\n\n.rp-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.rp-shapes {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.rp-selected-input {\n  position: absolute;\n}\n\n.rp-delete {\n  width: 20px;\n  height: 20px;\n  fill: white;\n}\n\n.rp-delete-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rp-default-input-section {\n  display: flex;\n  align-items: stretch;\n  background-color: #3384ff;\n  border: none;\n  border-radius: 5px;\n}\n\n.rp-default-input-section input {\n  padding: 10px;\n  color: white;\n  background: transparent;\n  border: 0;\n  outline: none;\n}\n\n.rp-default-input-section input::placeholder {\n  color: #94bfff;\n}\n\n.rp-default-input-section a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  color: white;\n  font-size: 12px;\n  background-color: #3b5bdb;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  transition: background-color 0.5s, color 0.5s;\n}\n\n.rp-default-input-section a:hover,\n.rp-default-input-section a:active {\n  color: #3384ff;\n  background-color: #5c7cfa;\n}\n";
  styleInject(css);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var shapeStyle = {
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
  var RectShape = function RectShape(_data, onChange) {
    var _this = this;

    _classCallCheck(this, RectShape);

    _defineProperty(this, "annotationData", void 0);

    _defineProperty(this, "onChangeCallBack", void 0);

    _defineProperty(this, "dragStartOffset", void 0);

    _defineProperty(this, "onDragStart", function (positionX, positionY) {
      var _this$annotationData$ = _this.annotationData.mark,
          x = _this$annotationData$.x,
          y = _this$annotationData$.y;
      _this.dragStartOffset = {
        offsetX: positionX - x,
        offsetY: positionY - y
      };
    });

    _defineProperty(this, "onDrag", function (positionX, positionY) {
      _this.annotationData.mark.x = positionX - _this.dragStartOffset.offsetX;
      _this.annotationData.mark.y = positionY - _this.dragStartOffset.offsetY;

      _this.onChangeCallBack();
    });

    _defineProperty(this, "checkBoundary", function (positionX, positionY) {
      var _this$annotationData$2 = _this.annotationData.mark,
          x = _this$annotationData$2.x,
          y = _this$annotationData$2.y,
          width = _this$annotationData$2.width,
          height = _this$annotationData$2.height;

      if ((positionX > x && positionX < x + width || positionX < x && positionX > x + width) && (positionY > y && positionY < y + height || positionY < y && positionY > y + height)) {
        return true;
      }

      return false;
    });

    _defineProperty(this, "paint", function (canvas2D, calculateTruePosition, selected) {
      var mark = _this.annotationData.mark;

      var _calculateTruePositio = calculateTruePosition(mark),
          x = _calculateTruePositio.x,
          y = _calculateTruePositio.y,
          width = _calculateTruePositio.width,
          height = _calculateTruePositio.height;

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
      } else {
        var _comment = _this.annotationData.comment;

        if (_comment) {
          canvas2D.font = "".concat(shapeStyle.fontSize, "px ").concat(shapeStyle.fontFamily);
          var metrics = canvas2D.measureText(_comment);
          canvas2D.save();
          canvas2D.fillStyle = shapeStyle.fontBackground;
          canvas2D.fillRect(x, y, metrics.width + shapeStyle.padding * 2, shapeStyle.fontSize + shapeStyle.padding * 2);
          canvas2D.textBaseline = "top";
          canvas2D.fillStyle = shapeStyle.fontColor;
          canvas2D.fillText(_comment, x + shapeStyle.padding, y + shapeStyle.padding);
        }
      }

      canvas2D.restore();
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    });

    _defineProperty(this, "adjustMark", function (_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === void 0 ? _this.annotationData.mark.x : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? _this.annotationData.mark.y : _ref$y,
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? _this.annotationData.mark.width : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? _this.annotationData.mark.height : _ref$height;
      _this.annotationData.mark.x = x;
      _this.annotationData.mark.y = y;
      _this.annotationData.mark.width = width;
      _this.annotationData.mark.height = height;

      _this.onChangeCallBack();
    });

    _defineProperty(this, "getAnnotationData", function () {
      return _this.annotationData;
    });

    _defineProperty(this, "setComment", function (comment) {
      _this.annotationData.comment = comment;
    });

    _defineProperty(this, "equal", function (data) {
      return data.id === _this.annotationData.id && data.comment === _this.annotationData.comment && data.mark.x === _this.annotationData.mark.x && data.mark.y === _this.annotationData.mark.y && data.mark.width === _this.annotationData.mark.width && data.mark.height === _this.annotationData.mark.height;
    });

    this.annotationData = _data;
    this.onChangeCallBack = onChange;
  };

  var NODE_WIDTH = 10;

  var Transformer = function Transformer(_shape, editable) {
    var _this = this;

    _classCallCheck(this, Transformer);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "shape", void 0);

    _defineProperty(this, "editable", void 0);

    _defineProperty(this, "currentNodeCenterIndex", void 0);

    _defineProperty(this, "checkBoundary", function (positionX, positionY) {
      var currentCenterIndex = _this.getCenterIndexByCursor(positionX, positionY);

      return currentCenterIndex >= 0;
    });

    _defineProperty(this, "startTransformation", function (positionX, positionY) {
      var currentCenterIndex = _this.getCenterIndexByCursor(positionX, positionY);

      _this.currentNodeCenterIndex = currentCenterIndex;
    });

    _defineProperty(this, "onTransformation", function (positionX, positionY) {
      var currentCentersTable = _this.getAllCentersTable();

      currentCentersTable[_this.currentNodeCenterIndex].adjust(positionX, positionY);
    });

    _defineProperty(this, "paint", function (canvas2D, calculateTruePosition) {
      var allCentersTable = _this.getAllCentersTable();

      canvas2D.save();
      canvas2D.fillStyle = "#5c7cfa";

      if (_this.editable) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = allCentersTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var _calculateTruePositio = calculateTruePosition({
              x: item.x - NODE_WIDTH / 2,
              y: item.y - NODE_WIDTH / 2,
              width: NODE_WIDTH,
              height: NODE_WIDTH
            }),
                x = _calculateTruePositio.x,
                y = _calculateTruePositio.y,
                width = _calculateTruePositio.width,
                height = _calculateTruePositio.height;

            canvas2D.fillRect(x, y, width, height);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      canvas2D.restore();
    });

    _defineProperty(this, "getCenterIndexByCursor", function (positionX, positionY) {
      var allCentersTable = _this.getAllCentersTable();

      return allCentersTable.findIndex(function (item) {
        return _this.checkEachRectBoundary(item.x, item.y, positionX, positionY);
      });
    });

    _defineProperty(this, "checkEachRectBoundary", function (rectCenterX, rectCenterY, positionX, positionY) {
      if (Math.abs(positionX - rectCenterX) <= NODE_WIDTH / 2 && Math.abs(positionY - rectCenterY) <= NODE_WIDTH / 2) {
        return true;
      }

      return false;
    });

    _defineProperty(this, "getAllCentersTable", function () {
      var shape = _this.shape;
      var _shape$getAnnotationD = shape.getAnnotationData().mark,
          x = _shape$getAnnotationD.x,
          y = _shape$getAnnotationD.y,
          width = _shape$getAnnotationD.width,
          height = _shape$getAnnotationD.height;
      return [{
        x: x,
        y: y,
        adjust: function adjust(positionX, positionY) {
          shape.adjustMark({
            x: positionX,
            y: positionY,
            width: width + x - positionX,
            height: height + y - positionY
          });
        }
      }, {
        x: x + width / 2,
        y: y,
        adjust: function adjust(_, positionY) {
          shape.adjustMark({
            y: positionY,
            height: height + y - positionY
          });
        }
      }, {
        x: x + width,
        y: y,
        adjust: function adjust(positionX, positionY) {
          shape.adjustMark({
            x: x,
            y: positionY,
            width: positionX - x,
            height: y + height - positionY
          });
        }
      }, {
        x: x,
        y: y + height / 2,
        adjust: function adjust(positionX) {
          shape.adjustMark({
            x: positionX,
            width: width + x - positionX
          });
        }
      }, {
        x: x + width,
        y: y + height / 2,
        adjust: function adjust(positionX) {
          shape.adjustMark({
            width: positionX - x
          });
        }
      }, {
        x: x,
        y: y + height,
        adjust: function adjust(positionX, positionY) {
          shape.adjustMark({
            x: positionX,
            width: width + x - positionX,
            height: positionY - y
          });
        }
      }, {
        x: x + width / 2,
        y: y + height,
        adjust: function adjust(_, positionY) {
          shape.adjustMark({
            height: positionY - y
          });
        }
      }, {
        x: x + width,
        y: y + height,
        adjust: function adjust(positionX, positionY) {
          shape.adjustMark({
            width: positionX - x,
            height: positionY - y
          });
        }
      }];
    });

    this.shape = _shape;
    this.editable = editable;
    this.id = _shape.getAnnotationData().id;
  };

  var randomId = (function () {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    var maxPos = chars.length;
    var id = "";

    for (var i = 0; i < len; i++) {
      id += chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return id;
  });

  var CreatingAnnotationState = function CreatingAnnotationState(context) {
    var _this = this;

    _classCallCheck(this, CreatingAnnotationState);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "onMouseDown", function () {
      return undefined;
    });

    _defineProperty(this, "onMouseMove", function (positionX, positionY) {
      var _this$context = _this.context,
          shapes = _this$context.shapes,
          onShapeChange = _this$context.onShapeChange;

      if (shapes.length > 0) {
        var currentShape = shapes.find(function (el) {
          return el.getAnnotationData().id === _this.context.pendingShapeId;
        });

        if (currentShape) {
          var _currentShape$getAnno = currentShape.getAnnotationData(),
              _currentShape$getAnno2 = _currentShape$getAnno.mark,
              x = _currentShape$getAnno2.x,
              y = _currentShape$getAnno2.y;

          currentShape.adjustMark({
            width: positionX - x,
            height: positionY - y
          });
        }
      }

      onShapeChange();
    });

    _defineProperty(this, "onMouseUp", function () {
      var _this$context2 = _this.context,
          shapes = _this$context2.shapes,
          onShapeChange = _this$context2.onShapeChange,
          setAnnotationState = _this$context2.setAnnotationState,
          onDelete = _this$context2.onDelete,
          onAnnotationCreate = _this$context2.props.onAnnotationCreate;
      var data = shapes.find(function (el) {
        return el.getAnnotationData().id === _this.context.pendingShapeId;
      });

      if (data) {
        if (data && data.getAnnotationData().mark.width !== 0 && data.getAnnotationData().mark.height !== 0) {
          _this.context.selectedId = data.getAnnotationData().id;

          if (onAnnotationCreate) {
            onAnnotationCreate(data.getAnnotationData());
          }
        } else {
          onDelete(_this.context.pendingShapeId);
          _this.context.selectedId = null;
        }
      } else {
        _this.context.pendingShapeId = null;
        _this.context.selectedId = null;
      }

      setAnnotationState(new DefaultAnnotationState(_this.context));
      onShapeChange();
    });

    _defineProperty(this, "onMouseLeave", function () {
      return _this.onMouseUp();
    });

    this.context = context;
  };

  var DraggingAnnotationState = function DraggingAnnotationState(context) {
    var _this = this;

    _classCallCheck(this, DraggingAnnotationState);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "onMouseDown", function () {
      return undefined;
    });

    _defineProperty(this, "onMouseMove", function (positionX, positionY) {
      var _this$context = _this.context,
          shapes = _this$context.shapes,
          selectedId = _this$context.selectedId;
      var currentShape = shapes.find(function (el) {
        return el.getAnnotationData().id === selectedId;
      });
      currentShape.onDrag(positionX, positionY);
    });

    _defineProperty(this, "onMouseUp", function () {
      var _this$context2 = _this.context,
          shapes = _this$context2.shapes,
          setAnnotationState = _this$context2.setAnnotationState,
          selectedId = _this$context2.selectedId,
          onAnnotationUpdate = _this$context2.props.onAnnotationUpdate;
      setAnnotationState(new DefaultAnnotationState(_this.context));

      if (onAnnotationUpdate) {
        var currentShape = shapes.find(function (el) {
          return el.getAnnotationData().id === selectedId;
        });
        onAnnotationUpdate(currentShape.getAnnotationData());
      }
    });

    _defineProperty(this, "onMouseLeave", function () {
      return _this.onMouseUp();
    });

    this.context = context;
  };

  var TransformationState = function TransformationState(context) {
    var _this = this;

    _classCallCheck(this, TransformationState);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "onMouseDown", function () {
      return undefined;
    });

    _defineProperty(this, "onMouseMove", function (positionX, positionY) {
      var currentTransformer = _this.context.currentTransformer;

      if (currentTransformer) {
        currentTransformer.onTransformation(positionX, positionY);
      }
    });

    _defineProperty(this, "onMouseUp", function () {
      var setAnnotationState = _this.context.setAnnotationState;
      setAnnotationState(new DefaultAnnotationState(_this.context));
    });

    _defineProperty(this, "onMouseLeave", function () {
      return _this.onMouseUp();
    });

    this.context = context;
  };

  var DefaultAnnotationState = function DefaultAnnotationState(context) {
    var _this = this;

    _classCallCheck(this, DefaultAnnotationState);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "onMouseMove", function () {
      return undefined;
    });

    _defineProperty(this, "onMouseUp", function () {
      _this.context.selectedId = null;

      _this.context.onShapeChange();
    });

    _defineProperty(this, "onMouseLeave", function () {
      return undefined;
    });

    _defineProperty(this, "onMouseDown", function (positionX, positionY) {
      var _this$context = _this.context,
          shapes = _this$context.shapes,
          currentTransformer = _this$context.currentTransformer,
          onShapeChange = _this$context.onShapeChange,
          setState = _this$context.setAnnotationState,
          editable = _this$context.props.editable;

      if (currentTransformer && currentTransformer.checkBoundary(positionX, positionY)) {
        currentTransformer.startTransformation(positionX, positionY);
        setState(new TransformationState(_this.context));
        return;
      }

      for (var i = shapes.length - 1; i >= 0; i--) {
        if (shapes[i].checkBoundary(positionX, positionY)) {
          _this.context.selectedId = shapes[i].getAnnotationData().id;
          _this.context.currentTransformer = new Transformer(shapes[i], editable);

          var _shapes$splice = shapes.splice(i, 1),
              _shapes$splice2 = _slicedToArray(_shapes$splice, 1),
              selectedShape = _shapes$splice2[0];

          shapes.push(selectedShape);
          selectedShape.onDragStart(positionX, positionY);
          onShapeChange();
          setState(new DraggingAnnotationState(_this.context));
          return;
        }
      }

      if (editable) {
        var newShapeId = randomId();

        _this.context.shapes.push(new RectShape({
          id: newShapeId,
          mark: {
            x: positionX,
            y: positionY,
            width: 0,
            height: 0,
            type: "RECT"
          }
        }, onShapeChange));

        _this.context.pendingShapeId = newShapeId;
        setState(new CreatingAnnotationState(_this.context));
      }
    });

    this.context = context;
  };

  var DeleteButton = (function () {
    return React.createElement("svg", {
      className: "rp-delete",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, React.createElement("g", {
      "data-name": "Layer 2"
    }, React.createElement("g", {
      "data-name": "trash-2"
    }, React.createElement("rect", {
      width: "24",
      height: "24",
      opacity: "0"
    }), React.createElement("path", {
      d: "M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"
    }))));
  });

  var DefaultInputSection = (function (_ref) {
    var editable = _ref.editable,
        annotation = _ref.annotation,
        _onChange = _ref.onChange,
        onDelete = _ref.onDelete;
    return React.createElement("div", {
      className: "rp-default-input-section"
    }, React.createElement("input", {
      className: "rp-default-input-section_input",
      placeholder: "INPUT TAG HERE",
      value: annotation.comment,
      disabled: !editable,
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      }
    }), editable && React.createElement("a", {
      className: "rp-default-input-section_delete",
      onClick: function onClick() {
        return onDelete();
      }
    }, React.createElement(DeleteButton, null)));
  });

  var defaultState = {
    scale: 1,
    originX: 0,
    originY: 0
  };

  var ReactPictureAnnotation =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ReactPictureAnnotation, _React$Component);

    function ReactPictureAnnotation() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ReactPictureAnnotation);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactPictureAnnotation)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "shapes", []);

      _defineProperty(_assertThisInitialized(_this), "currentTransformer", void 0);

      _defineProperty(_assertThisInitialized(_this), "pendingShapeId", null);

      _defineProperty(_assertThisInitialized(_this), "state", {
        inputPosition: {
          left: 0,
          top: 0
        },
        showInput: false
      });

      _defineProperty(_assertThisInitialized(_this), "currentAnnotationData", []);

      _defineProperty(_assertThisInitialized(_this), "selectedIdTrueValue", void 0);

      _defineProperty(_assertThisInitialized(_this), "canvasRef", React.createRef());

      _defineProperty(_assertThisInitialized(_this), "canvas2D", void 0);

      _defineProperty(_assertThisInitialized(_this), "imageCanvasRef", React.createRef());

      _defineProperty(_assertThisInitialized(_this), "imageCanvas2D", void 0);

      _defineProperty(_assertThisInitialized(_this), "currentImageElement", void 0);

      _defineProperty(_assertThisInitialized(_this), "currentAnnotationState", new DefaultAnnotationState(_assertThisInitialized(_this)));

      _defineProperty(_assertThisInitialized(_this), "scaleState", defaultState);

      _defineProperty(_assertThisInitialized(_this), "startDrag", undefined);

      _defineProperty(_assertThisInitialized(_this), "lastPinchLength", void 0);

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        var currentCanvas = _this.canvasRef.current;
        var currentImageCanvas = _this.imageCanvasRef.current;

        if (currentCanvas && currentImageCanvas) {
          _this.setCanvasDPI();

          _this.canvas2D = currentCanvas.getContext("2d");
          _this.imageCanvas2D = currentImageCanvas.getContext("2d");

          _this.onImageChange();
        }

        _this.syncAnnotationData();

        _this.syncSelectedId();
      });

      _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (preProps) {
        var _this$props = _this.props,
            width = _this$props.width,
            height = _this$props.height,
            image = _this$props.image;

        if (preProps.width !== width || preProps.height !== height) {
          _this.setCanvasDPI();

          _this.onShapeChange();

          _this.onImageChange();
        }

        if (preProps.image !== image) {
          _this.cleanImage();

          if (_this.currentImageElement) {
            _this.currentImageElement.src = image;
          } else {
            _this.onImageChange();
          }
        }

        _this.syncAnnotationData();

        _this.syncSelectedId();
      });

      _defineProperty(_assertThisInitialized(_this), "calculateMousePosition", function (positionX, positionY) {
        var _this$scaleState = _this.scaleState,
            originX = _this$scaleState.originX,
            originY = _this$scaleState.originY,
            scale = _this$scaleState.scale;
        return {
          positionX: (positionX - originX) / scale,
          positionY: (positionY - originY) / scale
        };
      });

      _defineProperty(_assertThisInitialized(_this), "calculateShapePosition", function (shapeData) {
        var _this$scaleState2 = _this.scaleState,
            originX = _this$scaleState2.originX,
            originY = _this$scaleState2.originY,
            scale = _this$scaleState2.scale;
        var x = shapeData.x,
            y = shapeData.y,
            width = shapeData.width,
            height = shapeData.height;
        return {
          x: x * scale + originX,
          y: y * scale + originY,
          width: width * scale,
          height: height * scale
        };
      });

      _defineProperty(_assertThisInitialized(_this), "setAnnotationState", function (annotationState) {
        _this.currentAnnotationState = annotationState;
      });

      _defineProperty(_assertThisInitialized(_this), "onShapeChange", function () {
        if (_this.canvas2D && _this.canvasRef.current) {
          _this.canvas2D.clearRect(0, 0, _this.canvasRef.current.width, _this.canvasRef.current.height);

          var hasSelectedItem = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;

              var isSelected = item.getAnnotationData().id === _this.selectedId;

              var _item$paint = item.paint(_this.canvas2D, _this.calculateShapePosition, isSelected),
                  x = _item$paint.x,
                  y = _item$paint.y,
                  height = _item$paint.height;

              if (isSelected) {
                if (!_this.currentTransformer || _this.currentTransformer.id !== item.getAnnotationData().id) {
                  _this.currentTransformer = new Transformer(item, _this.props.editable);
                }

                hasSelectedItem = true;

                _this.currentTransformer.paint(_this.canvas2D, _this.calculateShapePosition);

                _this.setState({
                  showInput: true,
                  inputPosition: {
                    left: x,
                    top: y + height + shapeStyle.margin
                  }
                });
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (!hasSelectedItem) {
            _this.setState({
              showInput: false,
              inputComment: ""
            });
          }
        }

        _this.currentAnnotationData = _this.shapes.map(function (item) {
          return item.getAnnotationData();
        });
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_this.currentAnnotationData);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onDelete", function () {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.selectedId;
        var _this$props2 = _this.props,
            onAnnotationDelete = _this$props2.onAnnotationDelete,
            editable = _this$props2.editable;

        if (editable) {
          var deleteTarget = _this.shapes.findIndex(function (shape) {
            return shape.getAnnotationData().id === id;
          });

          if (deleteTarget >= 0) {
            _this.shapes.splice(deleteTarget, 1);

            _this.onShapeChange();

            var _annotation = _this.shapes.find(function (shape) {
              return shape.getAnnotationData().id === id;
            });

            if (onAnnotationDelete && _annotation) {
              onAnnotationDelete(_annotation.getAnnotationData());
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "syncAnnotationData", function () {
        var annotationData = _this.props.annotationData;

        if (annotationData) {
          var refreshShapesWithAnnotationData = function refreshShapesWithAnnotationData() {
            var nextShapes = annotationData.map(function (eachAnnotationData) {
              return new RectShape(eachAnnotationData, _this.onShapeChange);
            });
            _this.shapes = nextShapes;

            if (!nextShapes.find(function (el) {
              return el.getAnnotationData().id === _this.selectedId;
            })) {
              _this.selectedId = null;
            }

            _this.onShapeChange();
          };

          if (annotationData.length !== _this.shapes.length) {
            refreshShapesWithAnnotationData();
          } else {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop2 = function _loop2() {
                var annotationDataItem = _step2.value;

                var targetShape = _this.shapes.find(function (item) {
                  return item.getAnnotationData().id === annotationDataItem.id;
                });

                if (targetShape && targetShape.equal(annotationDataItem)) {
                  return "continue";
                } else {
                  refreshShapesWithAnnotationData();
                  return "break";
                }
              };

              _loop: for (var _iterator2 = annotationData[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ret = _loop2();

                switch (_ret) {
                  case "continue":
                    continue;

                  case "break":
                    break _loop;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "syncSelectedId", function () {
        var selectedId = _this.props.selectedId;

        if (selectedId && selectedId !== _this.selectedId) {
          _this.selectedId = selectedId;

          _this.onShapeChange();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setCanvasDPI", function () {
        var currentCanvas = _this.canvasRef.current;
        var currentImageCanvas = _this.imageCanvasRef.current;

        if (currentCanvas && currentImageCanvas) {
          var currentCanvas2D = currentCanvas.getContext("2d");
          var currentImageCanvas2D = currentImageCanvas.getContext("2d");

          if (currentCanvas2D && currentImageCanvas2D) {
            currentCanvas2D.scale(2, 2);
            currentImageCanvas2D.scale(2, 2);
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onInputCommentChange", function (comment) {
        if (_this.props.editable) {
          var selectedShapeIndex = _this.shapes.findIndex(function (item) {
            return item.getAnnotationData().id === _this.selectedId;
          });

          _this.shapes[selectedShapeIndex].getAnnotationData().comment = comment;

          _this.onShapeChange();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "cleanImage", function () {
        if (_this.imageCanvas2D && _this.imageCanvasRef.current) {
          _this.imageCanvas2D.clearRect(0, 0, _this.imageCanvasRef.current.width, _this.imageCanvasRef.current.height);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onImageChange", function () {
        _this.cleanImage();

        if (_this.imageCanvas2D && _this.imageCanvasRef.current) {
          if (_this.currentImageElement) {
            var _this$scaleState3 = _this.scaleState,
                originX = _this$scaleState3.originX,
                originY = _this$scaleState3.originY,
                scale = _this$scaleState3.scale;

            _this.imageCanvas2D.drawImage(_this.currentImageElement, originX, originY, _this.currentImageElement.width * scale, _this.currentImageElement.height * scale);
          } else {
            var nextImageNode = document.createElement("img");
            nextImageNode.addEventListener("load", function () {
              _this.currentImageElement = nextImageNode;
              var width = nextImageNode.width,
                  height = nextImageNode.height;
              var imageNodeRatio = height / width;
              var _this$props3 = _this.props,
                  canvasWidth = _this$props3.width,
                  canvasHeight = _this$props3.height;
              var canvasNodeRatio = canvasHeight / canvasWidth;

              if (!isNaN(imageNodeRatio) && !isNaN(canvasNodeRatio)) {
                if (imageNodeRatio < canvasNodeRatio) {
                  var _scale = canvasWidth / width;

                  _this.scaleState = {
                    originX: 0,
                    originY: (canvasHeight - _scale * height) / 2,
                    scale: _scale
                  };
                } else {
                  var _scale2 = canvasHeight / height;

                  _this.scaleState = {
                    originX: (canvasWidth - _scale2 * width) / 2,
                    originY: 0,
                    scale: _scale2
                  };
                }
              }

              _this.onImageChange();

              _this.onShapeChange();
            });
            nextImageNode.alt = "";
            nextImageNode.src = _this.props.image;
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
        var editable = _this.props.editable;
        var _event$nativeEvent = event.nativeEvent,
            offsetX = _event$nativeEvent.offsetX,
            offsetY = _event$nativeEvent.offsetY;

        var _this$calculateMouseP = _this.calculateMousePosition(offsetX, offsetY),
            positionX = _this$calculateMouseP.positionX,
            positionY = _this$calculateMouseP.positionY;

        _this.currentAnnotationState.onMouseDown(positionX, positionY);

        if (!editable) {
          var _this$scaleState4 = _this.scaleState,
              originX = _this$scaleState4.originX,
              originY = _this$scaleState4.originY;
          _this.startDrag = {
            x: offsetX,
            y: offsetY,
            originX: originX,
            originY: originY
          };
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (event) {
        var editable = _this.props.editable;
        var _event$nativeEvent2 = event.nativeEvent,
            offsetX = _event$nativeEvent2.offsetX,
            offsetY = _event$nativeEvent2.offsetY;

        var _this$calculateMouseP2 = _this.calculateMousePosition(offsetX, offsetY),
            positionX = _this$calculateMouseP2.positionX,
            positionY = _this$calculateMouseP2.positionY;

        if (editable) {
          _this.currentAnnotationState.onMouseMove(positionX, positionY);
        } else if (_this.startDrag) {
          _this.scaleState.originX = _this.startDrag.originX + (offsetX - _this.startDrag.x);
          _this.scaleState.originY = _this.startDrag.originY + (offsetY - _this.startDrag.y);

          _this.setState({
            imageScale: _this.scaleState
          });

          requestAnimationFrame(function () {
            _this.onShapeChange();

            _this.onImageChange();
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
        _this.currentAnnotationState.onMouseUp();

        _this.startDrag = undefined;
      });

      _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (event) {
        var editable = _this.props.editable;
        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;

        var _this$calculateMouseP3 = _this.calculateMousePosition(clientX, clientY),
            positionX = _this$calculateMouseP3.positionX,
            positionY = _this$calculateMouseP3.positionY;

        _this.currentAnnotationState.onMouseDown(positionX, positionY);

        if (!editable) {
          var touches = event.touches;

          if (touches.length === 2) {
            _this.lastPinchLength = getPinchLength(touches);
          } else if (touches.length === 1) {
            _this.lastPinchLength = undefined;
            var _this$scaleState5 = _this.scaleState,
                originX = _this$scaleState5.originX,
                originY = _this$scaleState5.originY;
            _this.startDrag = {
              x: clientX,
              y: clientY,
              originX: originX,
              originY: originY
            };
          }
        } // suppress viewport scaling on iOS


        tryCancelEvent(event);
      });

      _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (event) {
        var editable = _this.props.editable;
        var _event$touches$2 = event.touches[0],
            clientX = _event$touches$2.clientX,
            clientY = _event$touches$2.clientY;

        var _this$calculateMouseP4 = _this.calculateMousePosition(clientX, clientY),
            positionX = _this$calculateMouseP4.positionX,
            positionY = _this$calculateMouseP4.positionY;

        if (editable) {
          _this.currentAnnotationState.onMouseMove(positionX, positionY);
        } else {
          var touches = event.touches;

          if (touches.length === 2) {
            _this.handlePinchChange(touches);
          } else if (touches.length === 1) {
            if (_this.startDrag) {
              _this.scaleState.originX = _this.startDrag.originX + (clientX - _this.startDrag.x);
              _this.scaleState.originY = _this.startDrag.originY + (clientY - _this.startDrag.y);

              _this.setState({
                imageScale: _this.scaleState
              });

              requestAnimationFrame(function () {
                _this.onShapeChange();

                _this.onImageChange();
              });
            }
          }
        } // suppress viewport scaling on iOS


        tryCancelEvent(event);
      });

      _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
        _this.currentAnnotationState.onMouseUp();

        _this.startDrag = undefined;
      });

      _defineProperty(_assertThisInitialized(_this), "handlePinchChange", function (touches) {
        var length = getPinchLength(touches);
        var midpoint = getPinchMidpoint(touches);
        var scale = _this.lastPinchLength ? _this.scaleState.scale * length / _this.lastPinchLength // sometimes we get a touchchange before a touchstart when pinching
        : _this.scaleState.scale;

        if (scale > 10) {
          scale = 10;
        }

        if (scale < 0.1) {
          scale = 0.1;
        }

        var _this$scaleState6 = _this.scaleState,
            originX = _this$scaleState6.originX,
            originY = _this$scaleState6.originY;
        _this.scaleState.originX = midpoint.x - (midpoint.x - originX) / _this.scaleState.scale * scale;
        _this.scaleState.originY = midpoint.y - (midpoint.y - originY) / _this.scaleState.scale * scale;
        _this.scaleState.scale = scale;

        _this.setState({
          imageScale: _this.scaleState
        });

        requestAnimationFrame(function () {
          _this.onShapeChange();

          _this.onImageChange();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
        _this.currentAnnotationState.onMouseLeave();
      });

      _defineProperty(_assertThisInitialized(_this), "onWheel", function (event) {
        // https://stackoverflow.com/a/31133823/9071503
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight;

        if (clientHeight + scrollTop + event.deltaY > scrollHeight) {
          // event.preventDefault();
          event.currentTarget.scrollTop = scrollHeight;
        } else if (scrollTop + event.deltaY < 0) {
          // event.preventDefault();
          event.currentTarget.scrollTop = 0;
        }

        var preScale = _this.scaleState.scale;
        _this.scaleState.scale += event.deltaY * 0.005;

        if (_this.scaleState.scale > 10) {
          _this.scaleState.scale = 10;
        }

        if (_this.scaleState.scale < 0.1) {
          _this.scaleState.scale = 0.1;
        }

        var _this$scaleState7 = _this.scaleState,
            originX = _this$scaleState7.originX,
            originY = _this$scaleState7.originY,
            scale = _this$scaleState7.scale;
        var _event$nativeEvent3 = event.nativeEvent,
            offsetX = _event$nativeEvent3.offsetX,
            offsetY = _event$nativeEvent3.offsetY;
        _this.scaleState.originX = offsetX - (offsetX - originX) / preScale * scale;
        _this.scaleState.originY = offsetY - (offsetY - originY) / preScale * scale;

        _this.setState({
          imageScale: _this.scaleState
        });

        requestAnimationFrame(function () {
          _this.onShapeChange();

          _this.onImageChange();
        });
      });

      return _this;
    }

    _createClass(ReactPictureAnnotation, [{
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            width = _this$props4.width,
            height = _this$props4.height,
            renderItemPreview = _this$props4.renderItemPreview,
            editable = _this$props4.editable;
        var _this$state = this.state,
            showInput = _this$state.showInput,
            inputPosition = _this$state.inputPosition;
        return React.createElement("div", {
          className: "rp-stage"
        }, React.createElement("canvas", {
          style: {
            width: width,
            height: height
          },
          className: "rp-image",
          ref: this.imageCanvasRef,
          width: width * 2,
          height: height * 2
        }), React.createElement("canvas", {
          className: "rp-shapes",
          style: {
            width: width,
            height: height
          },
          ref: this.canvasRef,
          width: width * 2,
          height: height * 2,
          onMouseDown: this.onMouseDown,
          onMouseMove: this.onMouseMove,
          onMouseUp: this.onMouseUp,
          onMouseLeave: this.onMouseLeave,
          onTouchStart: this.onTouchStart,
          onTouchEnd: this.onTouchEnd,
          onTouchMove: this.onTouchMove,
          onWheel: this.onWheel
        }), showInput && this.selectedItem && React.createElement("div", {
          className: "rp-selected-input",
          style: inputPosition
        }, renderItemPreview(editable, this.selectedItem, this.onInputCommentChange, this.onDelete)));
      }
    }, {
      key: "selectedId",
      set: function set(value) {
        var onSelect = this.props.onSelect;
        this.selectedIdTrueValue = value;
        onSelect(value);
      },
      get: function get() {
        return this.selectedIdTrueValue;
      }
    }, {
      key: "selectedItem",
      get: function get() {
        var _this2 = this;

        if (!this.props.annotationData) {
          return;
        }

        return this.props.annotationData.find(function (el) {
          return el.id === _this2.selectedIdTrueValue;
        });
      }
    }]);

    return ReactPictureAnnotation;
  }(React.Component);

  _defineProperty(ReactPictureAnnotation, "defaultProps", {
    renderItemPreview: function renderItemPreview(editable, annotation, onChange, onDelete) {
      return React.createElement(DefaultInputSection, {
        editable: editable,
        annotation: annotation,
        onChange: onChange,
        onDelete: onDelete
      });
    },
    editable: false
  });
  var getPinchMidpoint = function getPinchMidpoint(touches) {
    var touch1 = touches[0];
    var touch2 = touches[1];
    return {
      x: (touch1.clientX + touch2.clientX) / 2,
      y: (touch1.clientY + touch2.clientY) / 2
    };
  };
  var getPinchLength = function getPinchLength(touches) {
    var touch1 = touches[0];
    var touch2 = touches[1];
    return Math.sqrt(Math.pow(touch1.clientY - touch2.clientY, 2) + Math.pow(touch1.clientX - touch2.clientX, 2));
  };
  var tryCancelEvent = function tryCancelEvent(event) {
    if (event.cancelable === false) {
      return false;
    }

    event.preventDefault();
    return true;
  };

  exports.DefaultInputSection = DefaultInputSection;
  exports.ReactPictureAnnotation = ReactPictureAnnotation;
  exports.RectShape = RectShape;
  exports.shapeStyle = shapeStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
