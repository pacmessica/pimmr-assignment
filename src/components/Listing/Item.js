import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Item extends React.Component {
  render() {
    return (
      <li key={this.props.restaurant.id}>{this.props.restaurant.name}</li>
    )
  }
}

export default Item
