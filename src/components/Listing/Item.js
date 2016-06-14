import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Item extends React.Component {
  render() {
    console.log(this.props.restaurant.photos[0].originalURL)
    return (
      <li key={this.props.restaurant.id} className={styles.container}>
        <img src={this.props.restaurant.photos[0].s3URL} className={styles.photo} />
        <div className={styles.textbox}>
          <h3>{this.props.restaurant.name}</h3>
          <h5>{this.props.restaurant.cuisines.map(cuisine => {
            return cuisine
          })}</h5>
        </div>  
      </li>
    )
  }
}

export default Item
