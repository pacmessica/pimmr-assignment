import React from 'react'
import Listing from 'components/Listing/Listing'
import PaginationLink from 'components/PaginationLink/PaginationLink'

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

  getRestaurants() {
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
       params: [this.state.city, this.state.start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {this.setState({restaurants: json.result})})
    .catch(err => console.error(err));
  }

  showNextResults() {
    var newStart = this.state.start + 5
    this.setState({
      start: newStart
    })
    this.getRestaurants()
  }

  render() {
    return (
      <div>
        <Listing restaurants={this.state.restaurants} />
        <PaginationLink onClick={this.showNextResults.bind(this)}/>
      </div>);
  }
}

module.exports = Container;
