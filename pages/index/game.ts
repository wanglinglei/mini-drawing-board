
import {IPoint,TBrushType,TSize,canvasOperation,ISetSizeOptions,sizeEnum} from './constants'


class GameBoard {
  private context: CanvasRenderingContext2D = null; // canvas context
  private isDrawing: boolean = false;   // true if drawing
  private startPoint: IPoint; // start point
  private brushType:TBrushType='B'; // brush type
  private size:TSize='s'; // size of the brush

  constructor(options) {
    const { context } = options;
    this.context = context
  }

  /**
   * @description: 开始划线
   * @param {IPoint} point
   * @return {*}
   */
  drawLine(point: IPoint) {
    const { x, y } = point;
    this.context.lineWidth=sizeEnum[this.size];
    this.context.lineCap="round";
    this.context.beginPath();
    if (!this.isDrawing) {
      this.startPoint = point;
      this.isDrawing = true;
      return
    }
    this.context.moveTo(this.startPoint.x, this.startPoint.y);
    this.context.lineTo(x, y);
    this.startPoint = point;
    this.context.stroke();

  }

  /**
   * @description: 结束绘制
   * @return {*}
   */
  endDraw() {
    if (this.isDrawing) {
      this.isDrawing = false;
    }
  }

  setBrushConfig(options:ISetSizeOptions){
    const {type, size} = options;
    this.context.globalCompositeOperation=canvasOperation[type];
    this.brushType=type||this.brushType;
    this.size=size||this.size;
  }
}

export { GameBoard }