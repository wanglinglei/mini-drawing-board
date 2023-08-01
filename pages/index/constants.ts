
export const canvasOperation ={
  'B':'source-over',
  'T':'destination-out'
}
// TODO 常量合并
export const canvasOperations=[
 {
    type:'B',
    text:'画笔',
    config:'source-over'
  },
  {
    type:'T',
    text:'橡皮擦',
    config:'destination-over'
  }
]

export const sizeList =[
  {
    type:'s',
    text:'小'
  },
  {
    type:'m',
    text:'中',
  },
  {
    type:'l',
    text:'大'
  }
]



export enum sizeEnum {
  's'=5,
  'm'=10,
  'l'=15,
}

export type TSize= keyof typeof sizeEnum;
export interface IPoint {
  x: number;
  y: number;
}

export  type TBrushType  ='B' |'E';

export interface ISetSizeOptions {
  type?:TBrushType,
  size?:TSize
}