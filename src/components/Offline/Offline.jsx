import styles from './Offline.module.css'

const Offline = () => {
  return (
    <div>
      <h2 className={styles['offline-message']}>
        Looks like you are offline, please make sure you are connected to the
        internet to access the application
      </h2>
    </div>
  )
}

export default Offline
