import React from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '7d3095d7b46f9fbe0dd9ce99ef432d08';

export default class App extends React.Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`); 
    const data = await API_CALL.json();

    if(city && country) {
      console.log(data);
      this.setState({
        city: data.city.name,
        country: data.city.country,
        temperature: data.list[1].main.temp,
        humidity: data.list[1].main.humidity,
        description: data.list[1].weather[0].description,
        error: ''
      });
    }
     else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please, enter a valid values.'
      });
    }
  }
  
  render() {
    return(
      <div className="container">
        <Title />
        <Form getWeather={this.getWeather}/>
        
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />
      </div>
    );
  };
};