import { GameBoard } from "./game";

interface IPage {
  gameBoard:GameBoard,
  onCanvasReady:() => void,
  touchMove:(e:TouchEvent) => void,
  touchEnd:(e:TouchEvent) => void,ß
  changeType:(e:Event) => void,
  changeSize:(e:Event) => void
}


Page<{},IPage>({
  gameBoard:null,
  data: {
    SDKVersion: '',
    typeList:['B','T'],
    sizeList:['s','m','l'],
    currentType:'B',
    currentSize:'s'
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    this.setData({
      SDKVersion: my.SDKVersion,
    })
  },
  onCanvasReady() {
    console.log('canvas ready');
    
    //@ts-ignore
    my.createSelectorQuery().select('#canvas').node().exec( (res) => {
      console.log('canvas ready',res);
      
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = "skyblue";
      ctx.fill();
      //@ts-ignore
      this.gameBoard=new GameBoard({context:ctx});
      console.log('gameBoard ready',this.gameBoard);
      
    })
  },
  touchMove(e:TouchEvent){
    const point=e.touches[0];
    // @ts-ignore
    this.gameBoard.drawLine(point)
    console.log('touchMove',this.gameBoard,point);
  },
  touchEnd(e:TouchEvent){
    this.gameBoard.endDraw();
  },

  changeType(e){
    //@ts-ignore
    const type=e.target.dataset.type;
    console.log('changeType',type);
    this.setData({
      currentType:type
    })
    this.gameBoard.setBrushConfig({
      type
    })
  },

  changeSize(e){
    //@ts-ignore
    const size=e.target.dataset.size;
    this.setData({
      currentSize:size
    })
    this.gameBoard.setBrushConfig({
      size
    })
  }
});