import { GameBoard } from "./game";



import { canvasOperations } from './constants'

Page({
  gameBoard: null,
  data: {
    SDKVersion: '',
    currentType: 'B',
    currentSize: 8,
    canvasOperations,
    showColorPopup: false,
    color: {
      red: 125,
      yellow: 125,
      blue: 125,
    }
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
    my.createSelectorQuery().select('#canvas').node().exec((res) => {
      console.log('canvas ready', res);

      const canvas = res[0].node;
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = "skyblue";
      ctx.fill();
      //@ts-ignore
      this.gameBoard = new GameBoard({ context: ctx });
      console.log('gameBoard ready', this.gameBoard);

    })
  },
  touchMove(e: TouchEvent) {
    const point = e.touches[0];
    // @ts-ignore
    this.gameBoard.drawLine(point)
  },
  touchEnd(e: TouchEvent) {
    //@ts-ignore
    this.gameBoard.endDraw();
  },

  changeType(e) {
    //@ts-ignore
    const type = e.target.dataset.type;
    this.setData({
      currentType: type
    })
    //@ts-ignore
    this.gameBoard.setBrushConfig({
      type
    })
  },


  changeLineWidth(val){
    //@ts-ignore
    this.gameBoard.setBrushConfig({
      val
    })
  },

  onConfirmColor(val) {
    this.setData({ color: val, showColorPopup: false });
    //@ts-ignore
    this.gameBoard.setLineColor(val);
  },
  onClosePopup() {
    this.setData({ showColorPopup: false });
  },
  onShowColorPopup() {
    this.setData({ showColorPopup: true });
  },
  /**
   * @description: 重置画布
   * @return {*}
   */  
  onResetBoard() {
    my.confirm({
      title: '温馨提示',
      content: '画布将会被全部清空',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        if (result.confirm) {
          //@ts-ignore
          this.gameBoard.resetBoard()
        }
      },
    });
  },
  saveImage(){
    //@ts-ignore
    this.gameBoard.saveImage()
  }
});