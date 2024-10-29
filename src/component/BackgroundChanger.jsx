import React, { Component } from 'react';

class BackgroundChanger extends Component {
  constructor(props) {
    super(props);
    this.images = [
      '/Wallet.jpg',  
      '/cypto.jpg',
      '/invest2.jpg'
    ];
    this.index = 0;
  }

  componentDidMount() {
    this.interval = setInterval(this.changeBackground, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeBackground = () => {
    document.querySelector('.background-container').style.backgroundImage = `url(${this.images[this.index]})`;
    this.index = (this.index + 1) % this.images.length;
  };

  render() {
    return (
      <div className="background-container flex justify-center items-center  bg-gray-300 p-12">
        <h1 className='text-white font-medium text-4xl z-1000 border-b-8'>
          BlueTiles
        </h1>
      </div>
    );
  }
}

export default BackgroundChanger;
