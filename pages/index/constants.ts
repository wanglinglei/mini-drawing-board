
export const canvasOperation ={
  'B':'source-over',
  'T':'destination-out'
}

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