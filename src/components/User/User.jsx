import styles from './User.module.css'
import { GITHUB_API, DUMMY_AVATAR_URL } from '../../utils/constants'
import { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: 'Shahbaz',
        location: 'Germany',
        avatar_url: DUMMY_AVATAR_URL,
      },
    }
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_API)
    const jsonData = await data.json()
    console.log(jsonData)
    this.setState({
      userInfo: jsonData,
    })
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo
    return (
      <div className={styles['user-card']}>
        <div className={styles['avatar-container']}>
          <img src={avatar_url} alt={name} className={styles['user-avatar']} />
        </div>
        <h3>Name: {name}</h3>
        <p>Location: {location}</p>
      </div>
    )
  }
}

export default User
