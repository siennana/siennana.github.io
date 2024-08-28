import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import { TerminalProps } from '../../../types/window-props';
import '../../../pages/Terminal.css';

interface TerminalState {
  history: string[];
  currentInput: string;
  location: string;
}

const COMMAND_NOT_FOUND = 'command not found';
const directories = {
  root: {
    children: ['README.md', 'art', 'terminal.exe', 'projects', 'music.exe']
  } 
};

export default class Terminal extends Component<TerminalProps, TerminalState> {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      currentInput: '',
      location: 'root'
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
    const { currentInput, history, location } = this.state;
    if (currentInput.trim()) {
      const output = this.getOutput(currentInput.trim().toLowerCase());
      this.setState({
        history: [...history, `${location} $ ${currentInput}`, output],
        currentInput: '',
      });
    }
  };

  ls = (location: string) => {
    return directories[location].children.join('\t');
  };

  cd = (newLocation: string) => {
    
  }

  getOutput = (command: string): string => {
    const { location } = this.state;
    switch(command) {
      case('ls'):
        return this.ls(location);
      default:
        if (/^.*\.exe$/i.test(command) 
          && directories[location].children.includes(command)) {
          this.props.openWindow(command)
          return `opening ${command}`;
        } else {
          return COMMAND_NOT_FOUND;
        }
    }
  }

  render() {
    const { history, currentInput } = this.state;

    return (
      <div className="terminal-container">
        <div className="terminal-output">
          {history.map((entry, index) => (
            <div key={index} className="terminal-entry">
              {entry}
            </div>
          ))}
        </div>
        <div className="terminal-input">
          <span className="terminal-prompt">{this.state.location} $ </span>
          <input
            type="text"
            value={currentInput}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
