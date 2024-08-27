import { Component } from 'react';
import '../../../pages/ArtGallery.css';
import { ArtGalleryProps } from '../../../types/window-props';

const images = [
  "/assets/images/art/IMG_1055[3575]_1.jpg",
  "/assets/images/art/IMG_1057[3579]_2.jpg",
  "/assets/images/art/IMG_1058[3581]_3.jpg",
  "/assets/images/art/IMG_1059[3583].jpg",
  "/assets/images/art/IMG_2054[4105].jpg",
  "/assets/images/art/IMG_2055[4107].jpg",
  "/assets/images/art/IMG_2056[4109].jpg"
]

export default class ArtGallery extends Component<ArtGalleryProps, {}> {
 
 onSelectItem = (value: any) => {
  return this.props.openArtGalleryItem(value);
 }

  render() {
    return (
      <div className="art-gallery">
        {images.map((value, index) => {
          return (
            <div key={index} className='gallery-item'>
              <div 
                className='folder' 
                onClick={() => this.onSelectItem(value)}
                onTouchStart={() => this.onSelectItem(value)}>
                  <img src='/assets/images/icons/folder.png'/>
                </div>
              <div>image {index}</div>
            </div>
          )
        })}
      </div>
    );
  }
}
