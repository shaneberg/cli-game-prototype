import React from 'react';
import { Terminal } from 'xterm';

class Game extends React.Component {
  constructor(props) {
    super(props);

    let options = {};

    this.terminal = new Terminal(options);
    this.termRef = React.createRef();
  }

  componentDidMount() {
    this.terminal.open(this.termRef.current);
    this.terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }

  render() {
    return ( <div ref={this.termRef} /> );
  }
}

export default Game;
