import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'
import Item from './Item'

export class Listing extends React.Component {
  render() {
    return (
      <div>
        {this.props.restaurants.map(restaurant => {
          return <Item key={restaurant.id} restaurant={restaurant}/>
        })}
      </div>
    )
  }
}

export default Listing
