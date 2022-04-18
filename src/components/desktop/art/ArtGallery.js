import { Component } from 'react';
import '../../../pages/ArtGallery.css';

export default class ArtGallery extends Component {
  render() {
    return (
      <div className="art-gallery">
       <img className='gallery-item' src="/assets/images/art/IMG_1055[3575]_1.jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_1057[3579]_2.jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_1058[3581]_3.jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_1059[3583].jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_2054[4105].jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_2055[4107].jpg"/>
       <img className='gallery-item' src="/assets/images/art/IMG_2056[4109].jpg"/>
      </div>
    );
  }
}