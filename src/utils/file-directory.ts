import { DirectoryTree, Node } from '../types/file-directory';
import { drawingSource } from '../constants/file-directories.const';

export const directoryTree: DirectoryTree = {
  root: {
    path: 'root',
    children: ['README.md', 'art', 'terminal.exe', 'projects', 'music.exe', 'virus.exe'],
    hidden: ['secret_directory'],
    subTree: {
      ['projects']: {
        path: 'root/projects',
        children: [],
      },
      ['art']: {
        path: 'root/art',
        children: ['drawing', 'animation'],
        subTree: {
          ['drawing']: {
            path: 'root/art/drawing',
            children: drawingSource,
          },
          ['animation']: {
            path: 'root/art/animation',
            children: ['cube_rotate.exe'],
          },
        },
      },
      ['secret_directory']: {
        path: 'root/secret_directory',
        children: ['actual_virus.exe'],
      },
    }
  }
};


export const getSubTree = (ids: string[], node: Node, index: number): Node => {
  if (index === ids.length - 1 || ids.length == 0) {
    return node;
  };
  index++;
  const nextNode = node.subTree[ids[index]];
  return getSubTree(ids, nextNode, index);
};
