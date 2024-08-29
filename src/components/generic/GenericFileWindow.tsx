import { Component } from 'react';
import '../../pages/FileWindow.css';
import { FileWindowProps } from '../../types/window-props';

const ICON_FOLDER = '/assets/images/icons/folder.png';

export default class GenericFileWindow extends Component<FileWindowProps, {}> {
 
 onSelectItem = (value: any) => {
  return this.props.openWindow(value);
 }

  render() {
    return (
      <div className="file-window">
        {this.props.source.map((value, index) => {
          return (
            <div key={index} className='file-item'>
              <div 
                className='folder' 
                onClick={() => this.onSelectItem(value)}
                onTouchStart={() => this.onSelectItem(value)}>
                  <img src={ICON_FOLDER}/>
                </div>
              <div>image {index}</div>
            </div>
          )
        })}
      </div>
    );
  }
}
