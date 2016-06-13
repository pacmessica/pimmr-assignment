import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Listing extends React.Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.restaurants.map(restaurant => {
          return <li key={restaurant.id}>{restaurant.name}</li>
        })}
        </ul>
      </div>
    )
  }
}

export default Listing
