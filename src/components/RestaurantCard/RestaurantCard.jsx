import styles from './RestaurantCard.module.css'

import { CiClock2, CiMoneyBill } from 'react-icons/ci'

export const RestaurantCard = ({
  imageURL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0cd4d1e98a6476d83437ac2684db5d68',
  name = 'Tunday Kebabs',
  rating = 4.5,
  eta = '30 - 40 mins',
  price = '400 for two',
  cuisines = ['Indian', 'Biryani', 'Thali'],
}) => {
  return (
    <div className={styles['cards']}>
      <div className={styles['image-container']}>
        <img className={styles['restaurant-image']} src={imageURL} alt={name} />
      </div>
      <div className={styles['restaurant-details']}>
        <div className={styles['details-row-one']}>
          <h3>{name.length > 20 ? name.substring(0, 21) + '...' : name}</h3>
          <div className={styles['rating']}>{rating}</div>
        </div>
        <div className={styles['details-row-two']}>
          <p>
            <span className={styles['eta']}>
              <CiClock2 />
              {eta}
            </span>
            <span className={styles['price']}>
              <CiMoneyBill />
              {price}
            </span>
          </p>
        </div>
        <p className={styles['cuisines']}>{cuisines.join(', ')}</p>
      </div>
    </div>
  )
}
