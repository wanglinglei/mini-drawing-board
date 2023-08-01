
import {IPoint,TBrushType,TSize,canvasOperation,ISetSizeOptions,sizeEnum} from './constants'


class GameBoard {
  private context: CanvasRenderingContext2D = null; // canvas context
  private isDrawing: boolean = false;   // true if drawing
  private startPoint: IPoint; // start point
  private brushType:TBrushType='B'; // brush type
  private size:TSize='s'; // size of the brush
  private lineColor={
    red:125,
    yellow:125,
    blue:125,
  }
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
    const {red,yellow,blue}=this.lineColor
    this.context.strokeStyle= `rgba(${red},${yellow},${blue})`;
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

  setLineColor(val){
    this.lineColor=val;
  }
  /**
   * @description: 清空画布
   * @return {*}
   */  
  resetBoard(){
    this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height)
  }
}

export { GameBoard }