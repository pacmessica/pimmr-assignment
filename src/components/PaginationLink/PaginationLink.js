import React, { PropTypes as T } from 'react'

export class PaginationLink extends React.Component {
  showNext() {
    this.props.onClick();
  }
  render() {
    return (
      <button onClick={this.showNext.bind(this)}> See More Results</button>
    )
  }
}

export default PaginationLink
