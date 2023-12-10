import styles from './RestaurantCard.module.css'
import { RESTAURANT_IMG_BASE_URL } from '../../utils/constants'

import { CiClock2, CiMoneyBill } from 'react-icons/ci'
import { IoLocationSharp } from 'react-icons/io5'

export const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    areaName,
  } = restaurantData.info

  return (
    <div className={styles['cards']}>
      <div className={styles['image-container']}>
        <img
          className={styles['restaurant-image']}
          src={RESTAURANT_IMG_BASE_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className={styles['restaurant-details']}>
        <div className={styles['details-row-one']}>
          <h3>{name.length > 20 ? name.substring(0, 21) + '...' : name}</h3>
          {avgRating && <div className={styles['rating']}>{avgRating}</div>}
        </div>
        <div className={styles['details-row-two']}>
          <p>
            <span className={styles['eta']}>
              <CiClock2 />
              {`${sla.deliveryTime} mins`}
            </span>
            <span className={styles['price']}>
              <CiMoneyBill />
              {costForTwo}
            </span>
          </p>
        </div>
        <p className={styles['cuisines']}>{cuisines.join(', ')}</p>
        <p className={styles['area']}>
          <IoLocationSharp />
          {areaName}
        </p>
      </div>
    </div>
  )
}
