import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {

  state = {
    background: this.props.color,
  };
  
  handleChangeComplete = (color) => {
    this.props.setColor(color.hex)
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default ColorPicker