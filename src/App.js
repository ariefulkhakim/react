import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header nama="Peringkat Kelas" />
        <Counter />
      </div>
    );
  }
}

export default App;

class Counter extends Component {
  state = {
    angka: 0
  };
  tambah = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };
  minus = () => {
    if (this.state.angka == 0) {
      return alert('Jangan Nulis');
    }
    this.setState({
      angka: this.state.angka - 1
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.angka}</h2>
        <button onClick={this.tambah}>Tambah</button>
        <button onClick={this.minus}>Kurang</button>
      </div>
    );
  }
}
