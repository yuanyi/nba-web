import React, {Component} from 'react';
import CountSlider from './CountSlider'
import ShotChart from './ShotChart';

class DataViewContainer extends Component {
  state = {
      minCount: 2
  }

  onCountSliderChange = (data) => {
    console.log(data);
  }

   render() {
       return (
           <div className="data-view">
               <ShotChart playerId={this.props.playerId}
                          minCount={this.state.minCount}
               />

               <div className="filters">
                  <CountSlider onCountSliderChange={this.onCountSliderChange}/>
               </div>
           </div>
       );
   }
}

export default DataViewContainer;
