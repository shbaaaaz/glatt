// import local files
import { useOutletContext } from 'react-router-dom'
import { RestaurantContainer } from '../RestaurantContainer/RestaurantContainer'

const Body = () => {
  const searchString = useOutletContext()
  return (
    <div>
      <RestaurantContainer searchString={searchString} />
    </div>
  )
}

export default Body
