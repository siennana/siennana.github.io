import { Component } from 'react'; 
import { ImageWindowProps } from '../../types/window-props';

const imageStyle = {
	maxHeight: '100%',
  maxWidth: '100%',
};

export default class GenericImgWindow extends Component<ImageWindowProps, {}> {
  constructor(props: ImageWindowProps) {
    super(props);
  }

  render() {
    return (
      <div><img style={imageStyle as React.CSSProperties} src={this.props.source} /></div>
    );
  }
}
