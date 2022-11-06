import { Component } from 'react'; 
import { ArtGalleryItemProps } from '../../../types/window-props';

const imageStyle = {
	maxHeight: '100%',
  maxWidth: '100%',
};

export default class ArtGalleryItem extends Component<ArtGalleryItemProps, {}> {
  constructor(props: ArtGalleryItemProps) {
    super(props);
  }

  render() {
    return (
      <div><img style={imageStyle as React.CSSProperties} src={this.props.imageSrc} /></div>
    );
  }
}