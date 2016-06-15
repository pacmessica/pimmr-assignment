import React from 'react'

export class PaginationControl extends React.Component {
  showNext() {
    this.props.showNext();
  }

  showPrev() {
    this.props.showPrev();
  }

  render() {
    return (
      <div>
        <button onClick={this.showPrev.bind(this)}>Back</button>
        <button onClick={this.showNext.bind(this)}>Next</button>
      </div>
    )
  }
}

export default PaginationControl
