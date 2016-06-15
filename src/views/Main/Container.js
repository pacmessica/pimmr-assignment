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
       params: [this.state.city, this.state.index, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {this.setState({restaurants: json.result})})
    .catch(err => console.error(err));
  }

  showNextResults() {
    var newIndex = this.state.index + 5
    this.setState({
      index: newIndex
    })
    this.getRestaurants()
  }

  showPrevResults() {
    var newIndex = this.state.index - 5
    this.setState({
      index: newIndex
    })
    this.getRestaurants()
  }

  render() {
    return (
      <div>
        <Listing restaurants={this.state.restaurants} />
        <PaginationControl
          showNext={this.showNextResults.bind(this)}
          showPrev={this.showPrevResults.bind(this)}
          index={this.state.index} />
      </div>);
  }
}

module.exports = Container;
