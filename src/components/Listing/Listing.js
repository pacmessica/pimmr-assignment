import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'
import Item from './Item'

export class Listing extends React.Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.restaurants.map(restaurant => {
          return <Item restaurant={restaurant}/>
        })}
        </ul>
      </div>
    )
  }
}

export default Listing
