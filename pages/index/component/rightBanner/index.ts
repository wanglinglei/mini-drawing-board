Component({
  mixins: [],
  data: {},
  props: {
    onShowColorPopup:()=>{},
    onResetBoard:()=>{},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    showColorPopup(){
      this.props.onShowColorPopup();
    },
    resetBoard(){
      this.props.onResetBoard();
    }
  },
});
