// import third party packages
import { useEffect, useState } from 'react'
// import local files
import { fetchRestaurantList } from '../../lib/restaurantData'
import { ShimmerCardContainer } from '../Shimmer/Shimmer'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import styles from './RestaurantContainer.module.css'

export const RestaurantContainer = ({ searchString }) => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([])

  // Fetch restaurant list on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurants = await fetchRestaurantList()
        setRestaurantList(restaurants)
        setFilteredRestaurantData(restaurants)
      } catch (error) {
        console.log(error.message)
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
      {filteredRestaurantData.length > 0 ? (
        <div className={styles['restaurant-container']}>
          {filteredRestaurantData.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
        </div>
      ) : (
        // Rendering shimmer UI till the data has not arrived
        <ShimmerCardContainer />
      )}
    </>
  )
}
