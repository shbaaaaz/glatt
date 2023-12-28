import { useEffect, useState, useReducer } from 'react'
import { fetchRestaurantMenu } from '../lib/restaurantData'

export const useRestaurantMenu = (resId) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [restaurantInfo, dispatchRestaurant] = useReducer(
    restaurantInfoReducer,
    null
  )
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      setError('')
      setLoading(true)
      try {
        const result = await fetchRestaurantMenu(resId)
        console.log(result.data, 'menu data')
        if (result?.data) {
          dispatchRestaurant({
            type: 'SET',
            payload: result.data?.cards[0]?.card?.card?.info,
          })
          setMenu(
            result?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards
          )
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }
    fetchMenu()
  }, [resId])

  return { restaurantInfo, menu, loading, error }
}

function restaurantInfoReducer(state, action) {
  if (action.type === 'SET') {
    return {
      ...state,
      name: action.payload.name,
      cuisines: action.payload.cuisines,
      constForTwo: action.payload.costForTwoMessage,
      areaName: action.payload.areaName,
      rating: action.payload.avgRating,
      totalRatings: action.payload.totalRatingsString,
      deliveryTime: action.payload.sla.slaString,
      distance: action.payload.sla.lastMileTravelString,
    }
  } else return state
}
