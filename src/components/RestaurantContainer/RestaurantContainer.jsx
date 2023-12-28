// import third party packages
import { useEffect, useState } from 'react'
// import local files
import { ShimmerCardContainer } from '../Shimmer/Shimmer'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import { ErrorContainer } from '../ErrorContainer/ErrorContainer'
import styles from './RestaurantContainer.module.css'
import { Link } from 'react-router-dom'
import { useRestaurant } from '../../hooks/useRestaurant'

export const RestaurantContainer = ({ searchString }) => {
  const { restaurantList, isLoading, error } = useRestaurant()
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([])

  // Create a copy of original dataset for filtering
  useEffect(() => {
    setFilteredRestaurantData(restaurantList)
  }, [restaurantList])

  // Filter data on search
  useEffect(() => {
    searchString
      ? setFilteredRestaurantData(
          restaurantList.filter((restaurant) =>
            restaurant.info.name
              .toLowerCase()
              .includes(searchString.toLowerCase())
          )
        )
      : setFilteredRestaurantData(restaurantList)
  }, [searchString])

  // Filter top rated restaurants
  const filterTopRatedRestaurants = () => {
    setFilteredRestaurantData(
      filteredRestaurantData.filter(
        (restaurant) => restaurant.info.avgRating > 4
      )
    )
  }

  return (
    <>
      <div>
        <button
          className={styles['btn-top-rated']}
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      {isLoading && <ShimmerCardContainer />}
      {error && <ErrorContainer error={error} />}
      {filteredRestaurantData.length > 0 && (
        <div className={styles['restaurant-container']}>
          {filteredRestaurantData.map((restaurant) => (
            <Link
              className={styles['restaurant-card-cta']}
              to={'restaurant/' + restaurant.info.id}
              key={restaurant.info.id}
              aria-label='Click here to open the restaurant menu'
            >
              <RestaurantCard restaurantData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
