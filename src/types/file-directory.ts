export type DirectoryTree = Record<string, Node>;
export type Node = {
  path: string,
  type?: string,
  children?: string[],
  hidden?: string[],
  subTree?: DirectoryTree,
};
