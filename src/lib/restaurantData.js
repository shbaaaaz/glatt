import { DEFAULT_ADDRESS } from '../utils/constants'
import { mockData } from '../utils/mockData'

export const fetchRestaurantList = async () => {
  try {
    const url = `${process.env.REACT_APP_SWIGGY_API_URL}?lat=${DEFAULT_ADDRESS.lat}&lng=${DEFAULT_ADDRESS.long}`
    const result = await fetch(url)
    const jsonData = await result.json()
    const cards = jsonData?.data?.success?.cards
    const restaurants =
      cards[cards.length - 1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    return restaurants
  } catch (error) {
    return mockData
  }
}
