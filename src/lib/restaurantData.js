import {
  DEFAULT_ADDRESS,
  RESTAURANT_LIST_API_URL_MOBILE,
  RESTAURANT_LIST_API_URL_DESKTOP,
  RESTAURANT_LIST_API_CARD_TITLE_FOR_MOBILE,
  RESTAURANT_LIST_API_CARD_ID_FOR_DESKTOP,
} from '../utils/constants'

const getInfo = (lat = DEFAULT_ADDRESS.lat, long = DEFAULT_ADDRESS.long) => {
  let [url, isMobile] = ['', false]

  if (window.innerWidth <= 768) {
    url = `${RESTAURANT_LIST_API_URL_MOBILE}?lat=${lat}&lng=${long}`
    isMobile = true
  } else {
    url = `${RESTAURANT_LIST_API_URL_DESKTOP}?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    isMobile = false
  }
  return [url, isMobile]
}

export const fetchRestaurantList = async () => {
  try {
    const [url, isMobile] = getInfo()
    const result = await fetch(url)
    const jsonData = await result.json()

    if (isMobile) {
      const restaurantsForMobile = jsonData?.data?.success?.cards?.filter(
        (resCard) =>
          resCard.gridWidget?.header?.title?.toLowerCase() ===
          RESTAURANT_LIST_API_CARD_TITLE_FOR_MOBILE.toLowerCase()
      )[0]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      return restaurantsForMobile
    } else {
      const restaurantsForDesktop = jsonData?.data?.cards?.filter(
        (resCard) =>
          resCard.card?.card?.id === RESTAURANT_LIST_API_CARD_ID_FOR_DESKTOP
      )[0]?.card?.card?.gridElements?.infoWithStyle.restaurants
      return restaurantsForDesktop
    }
  } catch (error) {
    throw new Error(error)
  }
}
