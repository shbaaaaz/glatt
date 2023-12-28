import styles from './User.module.css'
import { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    const { name, location, email } = this.props
    return (
      <div className={styles['user-card']}>
        <h3>Name: {name}</h3>
        <p>Location: {location}</p>
        <p>Contact: {email}</p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default User
