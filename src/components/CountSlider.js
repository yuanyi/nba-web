import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class CountSlider extends React.Component {
 state = {
    inputValue: this.props.value
 }

 onChange = value => {
   const cleanValue = Number(value) ? value: this.state.inputValue;
    this.setState({
      inputValue: cleanValue,
    });
    this.props.onCountSliderChange(value);
  };

 render() {
   const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={ inputValue }
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
 }
}

export default CountSlider;
