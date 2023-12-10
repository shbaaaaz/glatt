import { RestaurantContainer } from '../RestaurantContainer/RestaurantContainer'

export const Body = ({ searchString }) => {
  return (
    <div>
      <RestaurantContainer searchString={searchString} />
    </div>
  )
}
