import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <h1>Pimmr</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
