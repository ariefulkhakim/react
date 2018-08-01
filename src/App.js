import React, { Component } from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

class App extends Component {
  state = {
    page: 'home'
  };

  // keHome = halaman => {
  //   this.setState({
  //     page: halaman
  //   });
  // };

  keHome = () => {
    this.setState({
      page: 'home'
    });
  };
  keAbout = () => {
    this.setState({
      page: 'about'
    });
  };
  keContact = () => {
    this.setState({
      page: 'contact'
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.page == 'home' && <Home />}
        {this.state.page == 'about' && <About />}
        {this.state.page == 'contact' && <Contact />}

        <button onClick={this.keHome}>home</button>
        <button onClick={this.keAbout}>about</button>
        <button onClick={this.keContact}>contact</button>
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
