import styles from './Shimmer.module.css'

const ShimmerCard = () => {
  return (
    <div className={styles['cards']}>
      <div className={styles['image-container']}>
        <div className={styles['restaurant-image']}></div>
      </div>
      <div className={styles['restaurant-details']}>
        <div className={styles['details-row-one']}>
          <h3></h3>
          <div className={styles['rating']}></div>
        </div>
        <div className={styles['details-row-two']}>
          <p>
            <span className={styles['eta']}></span>
            <span className={styles['price']}></span>
          </p>
        </div>
        <p className={styles['cuisines']}></p>
        <p className={styles['area']}></p>
      </div>
    </div>
  )
}

export const ShimmerCardContainer = () => {
  return (
    <>
      <div className={styles['restaurant-container']}>
        {[...Array(8)].map((item, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </>
  )
}
