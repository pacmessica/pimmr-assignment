import React from 'react'

export class PaginationControl extends React.Component {
  showNext() {
    this.props.updateRestaurants(this.props.index + 5);
  }

  showPrev() {
    this.props.updateRestaurants(this.props.index - 5);
  }

  render() {
    console.log("props index is " + this.props.index)
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
