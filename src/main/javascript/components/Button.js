import React from 'react';

export default class Button extends React.Component {

  onButtonClick(e) {
    console.log('The button was clicked. ' + e);
  }

  render() {
    let _this = this.props;
    return <button onClick={this.onButtonClick}>{_this.name}</button>;
  }
}
