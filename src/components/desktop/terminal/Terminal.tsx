import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import '../../../pages/Terminal.css'; // Optional for styling

interface TerminalState {
  history: string[];
  currentInput: string;
}

export default class Terminal extends Component<{}, TerminalState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [],
      currentInput: '',
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
    const { currentInput, history } = this.state;
    if (currentInput.trim()) {
      this.setState({
        history: [...history, `$ ${currentInput}`, currentInput],
        currentInput: '',
      });
    }
  };

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
          <span className="terminal-prompt">$ </span>
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
