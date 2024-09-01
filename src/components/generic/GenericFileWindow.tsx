import { Component } from 'react';
import '../../pages/FileWindow.css';
import { FileWindowProps } from '../../types/window-props';
import { DirectoryTree, Node } from '../../types/file-directory';
import { directoryTree, getSubTree } from '../../utils/file-directory';

const ICON_FOLDER = '/assets/images/icons/folder.png';

type FileWindowState = {
  directoryPath: string,
  directorySubTree: Node,
}

export default class GenericFileWindow extends Component<FileWindowProps, FileWindowState> {
  constructor(props: FileWindowProps) {
    super(props);
    this.state = {
      directoryPath: 'root',
      directorySubTree: directoryTree['root'],
    };
  };

  getCurrentSubTree = (): Node => {
    return getSubTree(this.state.directoryPath.split('/'), directoryTree['root'], 0);
  };

  getSource = (): string[] => {
    return this.getCurrentSubTree().children;
  };

  onSelectItem = (key: string) => {
    // if the selected item is a directory update the directory path
    if (this.getCurrentSubTree()?.subTree[key] !== undefined ) {
      this.setState(prev => {
        return {
          directoryPath: `${prev.directoryPath}/${key}`,
        }
      });
    } else {
      this.props.openWindow(key);
    }
  };

  render() {
    return (
      <div className="file-window">
        {this.getSource().map((value, index) => {
          return (
            <div key={index} className='file-item'>
              <div 
                className='folder' 
                onClick={() => this.onSelectItem(value)}
                onTouchStart={() => this.onSelectItem(value)}>
                  <img src={ICON_FOLDER}/>
                </div>
              <div>{value.split('/').pop()}</div>
            </div>
          )
        })}
      </div>
    );
  }
}
