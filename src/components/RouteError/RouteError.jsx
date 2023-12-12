import { useRouteError } from 'react-router-dom'
import styles from './RouteError.module.css'

const RouteError = () => {
  const error = useRouteError()

  return (
    <div className={styles['route-error-container']}>
      <h2>
        {error.status}: {error.statusText}
      </h2>
    </div>
  )
}

export default RouteError
