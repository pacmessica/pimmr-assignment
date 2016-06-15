import React from 'react'

export class PaginationControl extends React.Component {
  showNext() {
    var params = {startingIndex: this.props.index + 5}
    this.props.updateRestaurants(params);
  }

  showPrev() {
    var params = {startingIndex: this.props.index - 5 }
    this.props.updateRestaurants(params);
  }

  render() {
    return (
      <div>
        { this.props.index >= 5 &&
          <button onClick={this.showPrev.bind(this)}>Back</button> }
        <button onClick={this.showNext.bind(this)}>Next</button>
      </div>
    )
  }
}

export default PaginationControl
