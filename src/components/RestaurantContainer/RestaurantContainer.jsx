// import third party packages
import { useEffect, useState } from 'react'
// import local files
import { fetchRestaurantList } from '../../lib/restaurantData'
import { ShimmerCardContainer } from '../Shimmer/Shimmer'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import { ErrorContainer } from '../ErrorContainer/ErrorContainer'
import styles from './RestaurantContainer.module.css'
import { Link } from 'react-router-dom'

export const RestaurantContainer = ({ searchString }) => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch restaurant list on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('')
        setIsLoading(true)
        const restaurants = await fetchRestaurantList()
        if (restaurants) {
          setRestaurantList(restaurants)
          setFilteredRestaurantData(restaurants)
          setIsLoading(false)
        } else {
          throw new Error('Something went wrong!')
        }
      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }
    fetchData()
  }, [])

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
