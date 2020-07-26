import React, {Component} from 'react';
import CountSlider from './CountSlider'
import ShotChart from './ShotChart';
import _ from 'lodash';

class DataViewContainer extends Component {
  state = {
      minCount: 2
  }

  onCountSliderChange = (data) => {
    console.log(data);
    this.setState({
        minCount: data
      }
    )
  }

   render() {
       return (
           <div className="data-view">
               <ShotChart playerId={this.props.playerId}
                          minCount={this.state.minCount}
               />

               <div className="filters">
                  <CountSlider
                    value = {this.state.minCount}
                    onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
               </div>
           </div>
       );
   }
}

export default DataViewContainer;
