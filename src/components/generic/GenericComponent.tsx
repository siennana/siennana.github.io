import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

type GenericComponentProps = {
    markdownSource: string,
}

type GenericComponentState = {
    markdownText: string,
}

export default class GenericComponent extends Component<GenericComponentProps, GenericComponentState> {
  constructor(props: GenericComponentProps) {
    super(props);
    this.state = {
      markdownText: '',
    }
  }

  componentDidMount() {
    fetch(this.props.markdownSource).then(res => res.text()).then(text => this.setState({markdownText: text}));
	};

  showContent = () => {
    return (
        <ReactMarkdown>{this.state.markdownText}</ReactMarkdown>
    );
  };

  render() {
    return (
      <div ref={(node) => {
        if (node) {
          node.style.setProperty('padding', '1rem', 'important');
        }
      }}>{this.showContent()}</div>
    );
  }
}