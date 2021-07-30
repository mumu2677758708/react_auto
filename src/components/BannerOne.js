import { Component } from 'react';
import Swiper from 'swiper/swiper-bundle.min.js';
import "swiper/swiper-bundle.min.css";

class BannerOne extends Component {
	renderSlide(imgData, index){
		let { imgUrlOne } = imgData; 
		if(imgUrlOne === ""){
			return("");
		}
		return(
			<div  className="swiper-slide" key={index} onClick={()=>console.log('banner')}>
				<img src={imgUrlOne} className="banner_img" alt="banner"  />
			</div>
		)
	}
	componentDidMount() {
		 new Swiper('.swiper-container-banner-one', {
			autoplay:{
        delay: 5000,    // 自动播放间隔，单位ms
        disableOnInteraction: false, // 值为false表示用户操作swiper之后，不会停止播放，值true停止
			},
			speed: 500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"></span>';
				},
			}
		});
	}
  render() {
      const bannerData = this.props.data;
      let LIST_DATA= bannerData;
      return (
          <div className="banner__one__bg">
      <div className="swiper-container swiper-container-banner-one" >
        <div className="swiper-wrapper">
          {LIST_DATA.map((imgData, index)=>this.renderSlide(imgData, index))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
      );
  }
}
export default BannerOne;