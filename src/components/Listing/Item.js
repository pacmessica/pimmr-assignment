import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Item extends React.Component {
  getRestaurantName() {
    return this.props.restaurant.name.split(/\b/).map(word => {
      if ( (/restaurant/i).test(word) ) {
        return <strong>{word}</strong>
      }
      else {
        return word
      }
    });
  }
  render() {

    return (
      <li key={this.props.restaurant.id} className={styles.item}>
        <img src={this.props.restaurant.photos[0].s3URL} className={styles.photo} />
        <div className={styles.textbox}>
          <p className={styles.title}>{this.getRestaurantName()}</p>
          <p>{this.props.restaurant.cuisines.map(cuisine => {
            return cuisine + " "
          })}</p>
        </div>
      </li>
    )
  }
}

export default Item
