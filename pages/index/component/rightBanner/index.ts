import { rightBannerList } from "../../constants";

Component({
  mixins: [],
  data: {
    rightBannerList
  },
  props: {
    onShowColorPopup:()=>{},
    onResetBoard:()=>{},
    onSaveImage:()=>{},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    clickBanner(e){
      const {type}=e.target.dataset;
      console.log('clickBanner',type);
      if(type==='color'){
        this.props.onShowColorPopup();
      }else if(type==='reset'){
      this.props.onResetBoard();

      }else if(type==='save'){
        this.props.onSaveImage();
      }
    }
  },
});
