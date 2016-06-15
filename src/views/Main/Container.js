import React from 'react'
import Listing from 'components/Listing/Listing'
import PaginationControl from 'components/PaginationControl/PaginationControl'

class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants:[],
      city: 'Amsterdam',
      index: 0
    }

    this.getRestaurants(0);
  }

  getRestaurants(index) {
    var restaurants = []
    const limit = 5;
    fetch('https://api.pimmr.me', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [this.state.city, index, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {this.setState({restaurants: json.result, index: index})})
    .catch(err => console.error(err));
  }

  render() {
    console.log("state index is " + this.state.index)
    return (
      <div>
        <Listing restaurants={this.state.restaurants} />
        <PaginationControl
          updateRestaurants={this.getRestaurants.bind(this)}
          index={this.state.index} />
      </div>);
  }
}

module.exports = Container;
