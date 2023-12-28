// import local files
import { useOutletContext } from 'react-router-dom'
import { RestaurantContainer } from '../RestaurantContainer/RestaurantContainer'
import { useInternetConnection } from '../../hooks/useInternetConnection'
import Offline from '../Offline/Offline'

const Body = () => {
  const searchString = useOutletContext()
  const onlineStatus = useInternetConnection()

  return (
    <div>
      {onlineStatus ? (
        <RestaurantContainer searchString={searchString} />
      ) : (
        <Offline />
      )}
    </div>
  )
}

export default Body
