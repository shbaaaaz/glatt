// import local files
import { RestaurantContainer } from '../RestaurantContainer/RestaurantContainer'

const Body = ({ searchString }) => {
  return (
    <div>
      <RestaurantContainer searchString={searchString} />
    </div>
  )
}

export default Body
