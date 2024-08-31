import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import { TerminalProps } from '../../../types/window-props';
import { drawingSource } from '../../../constants/file-directories.const';
import { directoryTree, getSubTree } from '../../../utils/file-directory';
import '../../../pages/Terminal.css';

interface TerminalState {
  history: string[];
  currentInput: string;
  location: string;
  prompt: string;
  isLoading: boolean;
  loadingProgress: number;
  directorySubTree: any;
}

const COMMAND_NOT_FOUND = 'command not found';

const prompts = ['$ ', 'are you sure? '];

export default class Terminal extends Component<TerminalProps, TerminalState> {
  private loadingInterval: NodeJS.Timeout | null = null;
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      currentInput: '',
      location: 'root',
      prompt: `root ${prompts[0]}`,
      isLoading: false,
      loadingProgress: 0,
      directorySubTree: directoryTree['root'],
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentInput: e.target.value });
  };

  handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.processCommand();
    }
  };

  processCommand = () => {
    const { currentInput, history, prompt } = this.state;
    if (currentInput.trim()) {
      const output = this.getOutput(currentInput.trim().toLowerCase());
      this.setState((prev) => ({
        history: [...prev.history, `${prompt}${currentInput}`, output],
        currentInput: '',
      }));
      if (this.state.prompt === prompts[1]) {
        this.virus();
      }
    }
  };

  clear = () => {
    this.setState({history: []});
  };

  ls = (location: string, hidden: boolean) => {
    let dirs = this.state.directorySubTree.children;
    if (hidden) {
      dirs = [...dirs, ...this.state.directorySubTree.hidden]
    }
    return dirs.join('\t');
  };

  cd = (route: string) => {
    this.setState(prev => {
      let newRoute = route;
      const backward = route === '..';
      const pathArr = prev.directorySubTree.path.split('/');
      if (backward) {
        pathArr.pop();
        newRoute = pathArr[pathArr.length - 1]
      } else {
        pathArr.push(route);
      }
      return {
        location: newRoute, 
        prompt: `${newRoute} ${prompts[0]}`,
        directorySubTree: getSubTree(pathArr, directoryTree['root'], 0),
      }
    });
  };

  // convert route into valid path format string
  getTargetPath = (route: string) => {
    
  }

  virus = () => {
    this.startLoadingAnimation('installing virus.exe');
    //this.startLoadingAnimation('downloading browser history');
    //this.startLoadingAnimation('accessing camera');
  };

  startLoadingAnimation = (message: string) => {
    this.setState((prev) => ({
      history: [...prev.history, `${message}...`],
      currentInput: '',
      isLoading: true,
      loadingProgress: 0,
      prompt: `${this.state.location} ${prompts[0]}`, // Reset prompt after installation
    }));
    this.loadingInterval = setInterval(() => {
      this.setState(prev => {
        const newProgress = Math.min(prev.loadingProgress + 5, 100);
        const newHistory = [...prev.history];
        newHistory[newHistory.length - 1] = 
          `${message}... [${'#'.repeat(newProgress / 5)}${' '.repeat(20 
          - newProgress / 5)}] ${newProgress}%`;

        if (newProgress === 100) {
          if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
          }
          return {
            history: newHistory,
            isLoading: false,
            loadingProgress: 0,
          };
        }
        return {
          history: newHistory,
          isLoading: true,
          loadingProgress: newProgress,
        };
      });
    }, 250); // Update every 250ms for smoother animation
  };

  getOutput = (input: string): string => {
    const { prompt, history, currentInput } = this.state;
    const parsedCommands = input.split(' ');
    const command = parsedCommands[0];
    if (prompt !== prompts[1]) {
      const { location } = this.state;
      switch(command) {
        case('clear'):
          this.clear();
          break;
        case('ls'):
          const hidden = parsedCommands[1] === '-a';
          return this.ls(location, hidden);
        case ('cd'):
          this.cd(parsedCommands[1] ?? 'root');
          break;
        case('virus.exe'):
          this.setState(prev => ({prompt: prompts[1]}));
          break;
        default:
          if (/^.*\.exe$/i.test(command)) {
            try {
              this.props.openWindow(command)
              return `opening ${command}`;
            } catch {
              return `no application named ${command}`;
            }
          } else {
            return COMMAND_NOT_FOUND;
          }
      }
    } else if (prompt === prompts[1]) {
      if(command === 'n' || command === 'no') {
        return 'too bad';
      }
    }
  }

  render() {
    const { history, currentInput, isLoading } = this.state;

    return (
      <div className="terminal-container">
        <div className="terminal-output">
          {history.map((entry, index) => (
            <div key={index} className="terminal-entry">
              {entry}
            </div>
          ))}
        </div>
        {!isLoading && (
          <div className="terminal-input">
            <span className="terminal-prompt">{this.state.prompt}</span>
            <input
              type="text"
              value={currentInput}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              autoFocus
            />
          </div>
        )}
      </div>
    );
  }
}
