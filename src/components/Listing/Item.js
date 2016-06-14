import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'

export class Item extends React.Component {

  render() {

    return (
      <li key={this.props.restaurant.id} className={styles.container}>
        <img src={this.props.restaurant.photos[0].s3URL} className={styles.photo} />
        <div className={styles.textbox}>
          <p className={styles.title}>{this.props.restaurant.name.split(/\b/).map(word => {
                if( word=="Restaurant"){
                  return <strong>{word}</strong>
                }
                else{
                  return word
                }
              })}
          </p>
          <p>{this.props.restaurant.cuisines.map(cuisine => {
            return cuisine + " "
          })}</p>
        </div>
      </li>
    )
  }
}

export default Item
