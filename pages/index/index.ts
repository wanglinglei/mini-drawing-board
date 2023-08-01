import { GameBoard } from "./game";

interface IPage {
  gameBoard: GameBoard,
  onCanvasReady: () => void,
  touchMove: (e: TouchEvent) => void,
  touchEnd: (e: TouchEvent) => void, ß
  changeType: (e: Event) => void,
  changeSize: (e: Event) => void,
  onConfirmColor: (val) => void,
  onClosePopup: () => void,
  onShowColorPopup: () => void,
  onResetBoard: () => void
}

import { canvasOperations, sizeList } from './constants'

Page<{}, IPage>({
  gameBoard: null,
  data: {
    SDKVersion: '',
    typeList: ['B', 'T'],
    currentType: 'B',
    currentSize: 's',
    canvasOperations,
    sizeList,
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

      const canvas = res[0].node
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
    this.gameBoard.endDraw();
  },

  changeType(e) {
    //@ts-ignore
    const type = e.target.dataset.type;
    this.setData({
      currentType: type
    })
    this.gameBoard.setBrushConfig({
      type
    })
  },

  changeSize(e) {
    //@ts-ignore
    const size = e.target.dataset.size;
    this.setData({
      currentSize: size
    })
    this.gameBoard.setBrushConfig({
      size
    })
  },
  onConfirmColor(val) {
    this.setData({ color: val, showColorPopup: false });
    this.gameBoard.setLineColor(val);
  },
  onClosePopup() {
    this.setData({ showColorPopup: false });
  },
  onShowColorPopup() {
    this.setData({ showColorPopup: true });
  },
  onResetBoard() {
    my.confirm({
      title: '温馨提示',
      content: '画布将会被全部清空',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        if (result.confirm) {
          this.gameBoard.resetBoard()
        }
      },
    });
  }
});