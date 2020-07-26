import React, {Component} from 'react';
import CountSlider from './CountSlider'
import ShotChart from './ShotChart';
import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';

class DataViewContainer extends Component {
  state = {
      minCount: 2,
      chartType: 'hexbin',
  }

  onCountSliderChange = (data) => {
    console.log(data);
    this.setState({
        minCount: data,
        chartType: 'hexbin',
        displayTooltip: true,
      }
    )
  }

  onChartTypeChange = (e) => {
    this.setState({
        chartType: e.target.value,
    })
  }

  onTooltipChange = (checked) => {
      console.log(checked);
      this.setState({
        displayTooltip: checked,
      })
  }

   render() {
       return (
           <div className="data-view">
               <ShotChart playerId={this.props.playerId}
                          minCount={this.state.minCount}
                          chartType={this.state.chartType}
                          displayTooltip={this.state.displayTooltip}
               />

               <div className="filters">
                  {
                    this.state.chartType === 'hexbin'
                    ? <CountSlider
                      value = {this.state.minCount}
                      onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
                    : null
                  }


                    <br/>
                    <Row>
                        <Col span={9}>
                          <Radio.Group onChange={this.onChartTypeChange} value={this.state.chartType}>
                            <Radio value="hexbin">Hexbin</Radio>
                            <Radio value="scatter">Scatter</Radio>
                          </Radio.Group>
                        </Col>
                        <Col span={4}>
                          <Switch
                          checkedChildren="On"
                          unCheckedChildren="Off"
                          defaultChecked
                          onChange={this.onTooltipChange}/>
                        </Col>
                    </Row>
               </div>
           </div>
       );
   }
}

export default DataViewContainer;
