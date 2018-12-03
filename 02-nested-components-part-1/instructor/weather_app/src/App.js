import React, { Component } from 'react';
import WeatherIcon from './weatherIcon'
import './App.css';

class App extends Component {


  render() {
    let weatherIcon = null;
    weatherIcon = this.props.weatherData.map((e,i)=> <WeatherIcon key={i} {...e}/>)
    return (
      <div className='App'>
      {weatherIcon}
      </div>
    );
  }
}



export default App;
