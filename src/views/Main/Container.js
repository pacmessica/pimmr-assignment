import React from 'react'
import Listing from 'components/Listing/Listing'
import PaginationControl from 'components/PaginationControl/PaginationControl'

class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants:[],
      city: 'Amsterdam',
      start: 0
    }

    this.getRestaurants();
  }

  getRestaurants(params = {}) {
    var restaurants = []
    const start = (params.startingIndex === undefined) ? 0 : params.startingIndex;
    const city = (params.city === undefined) ? 'Amsterdam' : params.city;
    const limit = 5;
    fetch('https://api.pimmr.me', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [this.state.city, start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {this.setState({restaurants: json.result, start: start, city: city})})
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Listing restaurants={this.state.restaurants} />
        <PaginationControl
          updateRestaurants={this.getRestaurants.bind(this)}
          index={this.state.start} />
      </div>);
  }
}

module.exports = Container;
