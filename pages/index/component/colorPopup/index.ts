Component({
  mixins: [],
  data: {
    style:{
      backgroundColor: 'rgba(125,125,125)'
    },
    currentColor:{
      red:125,
      yellow:125,
      blue:125,
    }
  },
  props: {
    color:{
      red:125,
      yellow:125,
      blue:125,
    },
    onConfirmColor:(val)=>{},
    onClosePopup:()=>{}
  },
  
  didMount() {
    const {red, yellow, blue} = this.props.color;
    this.setData({
      style:{
        backgroundColor: `rgba(${red},${yellow},${blue})`
      },
      currentColor:{
        red,
        yellow,
        blue
      }
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    closePopup(){
      this.props.onClosePopup()
    },
    confirmColor(){
      this.props.onConfirmColor(this.data.currentColor)
    },
    onChangeRed(val){
      this.setData({
        currentColor:{
          ...this.data.currentColor,
          red:val
        }
      })
      this.setStyle()      
    },
    onChangeYellow(val){
      this.setData({
        currentColor:{
          ...this.data.currentColor,
          yellow:val
        }
      })
      this.setStyle()      
    },
    onChangeBlue(val){
      this.setData({
        currentColor:{
          ...this.data.currentColor,
          blue:val
        }
      })
      this.setStyle()      
    },
    setStyle(){
      const {red, yellow, blue} = this.data.currentColor;
      this.setData({
        style:{
          backgroundColor: `rgba(${red},${yellow},${blue})`
        },
      })
    }
  },
});
