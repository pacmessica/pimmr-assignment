import React from 'react'
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants:[]
    }

    this.getRestaurants();
  }

  getRestaurants(){
    var restaurants = []
    const city = 'Amsterdam';
    const start = 0;
    const limit = 10;
    fetch('https://api.pimmr.me', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [city, start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {this.setState({restaurants: json.result})})
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.restaurants.map(restaurant => {
          return <li key={restaurant.id}>{restaurant.name}</li>
        })}
        </ul>
      </div>);
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
