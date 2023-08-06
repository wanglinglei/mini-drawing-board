
export const canvasOperation ={
  'B':'source-over',
  'T':'destination-out'
}
// TODO 常量合并
export const canvasOperations=[
 {
    type:'B',
    text:'画笔',
    config:'source-over',
    defaultWidth:10
  },
  {
    type:'T',
    text:'橡皮擦',
    config:'destination-over',
    defaultWidth:10
  }
]

export interface IPoint {
  x: number;
  y: number;
}

export  type TBrushType  ='B' |'E';


export const rightBannerList =[
  {
    icon:'FrownFill',
    text:'重置',
    type:'reset',
  },
  {
    icon:'SmileFill',
    text:'保存',
    type:'save'
  },
  {
    icon:'EditSFill',
    text:'调色',
    type:'color'
  }
]