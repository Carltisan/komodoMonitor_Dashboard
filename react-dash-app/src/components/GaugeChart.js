import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

class GaugeChart extends Component {
    render() {
        return (
            <div text-align="center">
                <Gauge value={33} width={300} height={240} label="" />
            </div>
        );
    }
}

export default GaugeChart;
