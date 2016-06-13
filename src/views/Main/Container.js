import React from 'react'
import Listing from 'components/Listing/Listing'

class Container extends React.Component {
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
        <Listing restaurants={this.state.restaurants} />
      </div>);
  }
}

module.exports = Container;
